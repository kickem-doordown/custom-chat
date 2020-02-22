import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatdbService {

  constructor(public db: AngularFirestore) { }
  
  getChats() {
    return this.db.collection('chats', ref => ref.orderBy("last_read", "desc")).get().pipe(first());
  }

  getChatData(chatID: string){
    return this.db.collection('chats').doc(chatID).valueChanges();
  }

}
