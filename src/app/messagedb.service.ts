import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { map, take } from 'rxjs/operators';
import { CollectionReference } from '@angular/fire/firestore'
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class MessagedbService {
  canLike = true;

  constructor(public db: AngularFirestore) { 
  }

  getObservable(){
    return this.db.collection('messages', ref => ref.orderBy("timestamp", "desc").limit(50)).valueChanges({idField: 'docid'});
  }

  sendMessage(mes: Object){
    mes["likeArr"] = [];
    this.db.collection('messages').add(mes);
  }

  likeMessage(messageObj: any, user: string){
    if(messageObj.likeArr.includes(user)) {
      this.db.collection('messages').doc(messageObj.docid).update({"likeArr": firebase.firestore.FieldValue.arrayRemove(user)});
    } else {
      this.db.collection('messages').doc(messageObj.docid).update({"likeArr": firebase.firestore.FieldValue.arrayUnion(user)});
    }
  }

}
