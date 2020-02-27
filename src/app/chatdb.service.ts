import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { first } from 'rxjs/operators';
import { AuthService } from './core/auth.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatdbService {

  chatID: string;
  chatIDObservable: Subject<string>;
  chatList: Observable<any>;
  
  constructor(public db: AngularFirestore, public auth: AuthService) {
    this.chatIDObservable = new Subject(); 
    this.chatList = this.db.collection('chats', ref => ref.where('users', 'array-contains', this.auth.userData.uid)).valueChanges();
  }
  
  getChats() {
    return this.db.collection('chats', ref => ref.where('users', 'array-contains', this.auth.userData.uid)).valueChanges();
  }

  createChat(name: string, user: string) {
    let chat = {};
    chat["name"] = name;
    chat["users"] = [user];
    chat["last_read"] = firebase.firestore.FieldValue.serverTimestamp();
    this.db.collection('chats').add(chat).then(ref => {
      ref.collection('messages').add({value:""});
      ref.update({"id": ref.id});
    });
  }

  getChat(chatID: string) {
    return this.db.collection('chats').doc(chatID);
  }

  getCurChat() {
    return this.db.collection('chats').doc(this.chatID);
  }

  getChatData(chatID: string){
    return this.db.collection('chats').doc(chatID).valueChanges();
  }

  setChatID(chatID: string) {
    this.chatID = chatID;
    this.chatIDObservable.next(this.chatID);
  }

  getChatID() {
    return this.chatID;
  }

  leaveCurrentChat(){
    this.db.collection('chats').doc(this.chatID).update({users: firebase.firestore.FieldValue.arrayRemove(this.auth.userData.uid)});
    this.chatID = undefined;
  }

}
