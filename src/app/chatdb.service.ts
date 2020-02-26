import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatdbService {

  chatID: string = "chat1";
  
  @Output() chatChanged: EventEmitter<any> = new EventEmitter();


  constructor(public db: AngularFirestore) { }
  
  getChats() {
    return this.db.collection('chats', ref => ref.orderBy("last_read", "desc")).valueChanges();
  }

  createChat(name: string, user: string) {
    let chat = {};
    chat["name"] = name;
    chat["usersA"] = [user];
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
    this.chatChanged.emit();
  }

  getChatID() {
    return this.chatID;
  }

}
