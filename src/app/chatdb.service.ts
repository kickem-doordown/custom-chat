import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { first } from 'rxjs/operators';
import { AuthService } from './core/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatdbService {

  chatID: string;
  chatList: Observable<any>;
  
  constructor(public db: AngularFirestore, public auth: AuthService) {
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
  }

  getChatID() {
    return this.chatID;
  }

}
