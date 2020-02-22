import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { skip, first } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagedbService {
  canLike = true;

  constructor(public db: AngularFirestore, public http: HttpClient) { }

  getRecentMessages(chatID: string, num: number){
    return this.db.collection('chat').doc(chatID).collection('messages', ref => ref.orderBy("timestamp", "desc").limit(num)).get().pipe(first());
  }

  getPageAfter(chatID: string, limit: number, startDoc: any){
    return this.db.collection('chat').doc(chatID).collection('messages', ref => ref.orderBy("timestamp", "desc").startAfter(startDoc).limit(limit)).get().pipe(first());
  }

  getMessageUpdates(chatID: string){
    return this.db.collection('chat').doc(chatID).collection('messages', ref => ref.orderBy("timestamp", "desc").limit(1)).snapshotChanges().pipe(skip(1));
  }

  sendMessage(chatID: string, mes: any){
    mes["likeArr"] = [];
    mes["timestamp"] = firebase.firestore.Timestamp.now();
    return this.db.collection('chat').doc(chatID).collection('messages').doc(mes.docid).set(mes);
  }

  likeMessage(chatID: string, messageObj: any, user: string){
    if(messageObj.likeArr.includes(user)) {
      return this.db.collection('chat').doc('chat1').collection('messages').doc(messageObj.docid).update({"likeArr": firebase.firestore.FieldValue.arrayRemove(user)});
    } else {
      return this.db.collection('chat').doc('chat1').collection('messages').doc(messageObj.docid).update({"likeArr": firebase.firestore.FieldValue.arrayUnion(user)});
    }
  }
  
  getMessageData(chatID: string, doc: any){
    return this.db.collection('chat').doc(chatID).collection('messages').doc(doc).valueChanges();
  }

  // getObservable(num: number){
  //   return this.db.collection('messages', ref => ref.orderBy("timestamp", "desc").limit(num)).valueChanges({idField: 'docid'});
  // }

  // getObservableAfter(limit: number, timestamp: number){
  //   return this.db.collection('messages', ref => ref.orderBy("timestamp", "desc").limit(limit).startAfter(['timestamp', timestamp])).valueChanges({idField: 'docid'});
  // }

  // getState(limit: number){
  //   return this.db.collection('messages', ref => ref.orderBy("timestamp", "desc").limit(1)).stateChanges();
  // }


}
