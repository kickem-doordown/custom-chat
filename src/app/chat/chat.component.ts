import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagedbService } from '../messagedb.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  @ViewChild('messageText', {static: false}) messageText: ElementRef;
  messages: Observable<any[]>;

  constructor(public mesService: MessagedbService, public auth: AngularFireAuth, public router: Router) {
    this.messages = mesService.getObservable();

    if(this.auth.auth.currentUser === null){
      this.router.navigate(['/loginpage']);
    }
  }

  sendMessage(event){

    this.mesService.sendMessage({user: "jmk", value: this.messageText.nativeElement.value, timestamp: Date.now()});
    this.messageText.nativeElement.value = "";

    event.stopPropagation();
  }

}
