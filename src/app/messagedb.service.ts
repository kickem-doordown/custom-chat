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

  getRecentMessages(num: number){
    return this.db.collection('messages', ref => ref.orderBy("timestamp", "desc").limit(num)).get().pipe(first());
  }

  getPageAfter(limit: number, startDoc: any){
    return this.db.collection('messages', ref => ref.orderBy("timestamp", "desc").startAfter(startDoc).limit(limit)).get().pipe(first());
  }

  getMessageUpdates(){
    return this.db.collection('messages', ref => ref.orderBy("timestamp", "desc").limit(1)).snapshotChanges().pipe(skip(1));
  }

  sendMessage(mes: Object){
    this.http.post(environment.messageUrl, mes).pipe(first()).subscribe(resp => console.log(resp));

    // mes["likeArr"] = [];
    // mes["timestamp"] = Date.now();
    // this.db.collection('messages').add(mes);
  }

  likeMessage(messageObj: any, user: string){
    let req = {"messageObj": messageObj, "user": user}
    this.http.post(environment.likeUrl, req).pipe(first()).subscribe(resp => {console.log(resp)});

    // if(messageObj.likeArr.includes(user)) {
    //   this.db.collection('messages').doc(messageObj.docid).update({"likeArr": firebase.firestore.FieldValue.arrayRemove(user)});
    // } else {
    //   this.db.collection('messages').doc(messageObj.docid).update({"likeArr": firebase.firestore.FieldValue.arrayUnion(user)});
    // }
  }
  
  getMessageData(doc: any){
    return this.db.collection('messages').doc(doc).valueChanges();
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
