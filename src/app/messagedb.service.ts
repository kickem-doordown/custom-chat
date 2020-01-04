import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagedbService {

  constructor(public db: AngularFirestore) { 

  }

  getObservable(){
    return this.db.collection('messages', ref => ref.orderBy("timestamp", "asc")).valueChanges();


  }

  sendMessage(mes: Object){
    this.db.collection('messages').add(mes);
  }
}
