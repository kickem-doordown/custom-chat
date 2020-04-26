import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { first, take } from 'rxjs/operators';
import { AuthService } from './core/auth.service';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatdbService {

  private chatID: string = null;
  chatIDObservable: Subject<string>;
  private chatList: Observable<any>;
  private sortedChatList: Array<{last_read: firebase.firestore.Timestamp}> = [];

  constructor(public db: AngularFirestore, public auth: AuthService) {
    this.chatIDObservable = new Subject();
    this.chatList = this.db.collection('chats', ref => ref.where('users', 'array-contains', this.auth.userData.uid)).valueChanges();
    this.chatList.subscribe(ref => {
      this.sortedChatList = ref;
      this.sortedChatList.sort((a, b) => b.last_read.seconds - a.last_read.seconds);
    });

  }

  getChats() {
    return this.chatList;
  }

  getSortedChats() {
    return this.sortedChatList;
  }

  createChat(name: string, user: string) {
    let chat = {};
    chat["name"] = name;
    chat["users"] = [user];
    chat["photoURL"] = 'assets/default_group_chat.png';
    chat["inviteLink"] = (Math.floor(Math.random() * 1000000000000)).toString(16);
    chat["last_read"] = firebase.firestore.FieldValue.serverTimestamp();
    this.db.collection('chats').add(chat).then(ref => {
      ref.collection('messages').add({ value: "" });
      ref.update({ "id": ref.id });
      this.setChatID(ref.id);
    });
  }

  getChat(chatID: string) {
    return this.db.collection('chats').doc(chatID);
  }

  getCurChat() {
    return this.db.collection('chats').doc(this.chatID);
  }

  getChatData(chatID: string) {
    return this.db.collection('chats').doc(chatID).valueChanges();
  }

  setChatID(chatID: string) {
    this.chatID = chatID;
    this.chatIDObservable.next(this.chatID);
  }

  getChatID() {
    return this.chatID;
  }

  updateCurChatData(data: any) {
    this.updateChatData(this.chatID, data);
  }

  updateChatData(chatID: string, data: any) {
    this.db.collection('chats').doc(chatID).update(data);
  }

  leaveCurrentChat() {
    this.db.collection('chats').doc(this.chatID).update({ users: firebase.firestore.FieldValue.arrayRemove(this.auth.userData.uid) });
    this.setChatID(undefined);
  }

  joinChat(inviteKey) {
    return new Promise((resolve, reject) => {
      this.db.collection('chats', ref => ref.where('inviteLink', '==', inviteKey)).get().subscribe(doc => {
        if (doc.docs.length === 0)
          reject();

        doc.docs[0].ref.update({ users: firebase.firestore.FieldValue.arrayUnion(this.auth.userData.uid) }).then(() => resolve()).catch(err => reject(err));
      });
    });
  }

}
