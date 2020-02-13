import * as firebase from 'firebase/app';
import '@firebase/messaging';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  messaging = firebase.messaging();

  constructor() {

    this.messaging.requestPermission().then(() => {
      console.log("got notif perm");
      return this.messaging.getToken();
    }).then(token => console.log(token)).catch((err)=>{
      console.error("notification error: ", err);
    });
   }
}
