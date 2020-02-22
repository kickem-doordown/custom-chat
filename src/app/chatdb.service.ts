import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
