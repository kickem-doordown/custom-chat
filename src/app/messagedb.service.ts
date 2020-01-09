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
    mes["likesNum"] = 0;
    this.db.collection('messages').add(mes);
  }

  likeMessage(doc: string, user: string){
    if(this.canLike){
      this.canLike = false;
      let arr = [];
      this.db.collection('messages').doc(doc).collection('likesUsers').doc(user).get().pipe(take(1)).subscribe(docCheck => {
        if(!docCheck.exists) {
          console.log("liked message: " + doc);
          arr.push(this.db.collection('messages').doc(doc).collection('likesUsers').doc(user).set({"LIKE": true}));
          arr.push(this.db.collection('messages').doc(doc).update({"likesNum" : firebase.firestore.FieldValue.increment(1)}));
          Promise.all(arr).then(()=>this.canLike = true);
        } else {
          arr.push(this.db.collection('messages').doc(doc).collection('likesUsers').doc(user).delete());
          arr.push(this.db.collection('messages').doc(doc).update({"likesNum" : firebase.firestore.FieldValue.increment(-1)}));
          Promise.all(arr).then(()=>this.canLike = true);
        }
      });
    }
  }

}
