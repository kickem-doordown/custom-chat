import { Component, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MessagedbService } from '../messagedb.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnDestroy{
  
  email: string;
  @ViewChild('messageText', {static: false}) 
  messageText: ElementRef;
  @ViewChild('chat', {static: false}) 
  chatContainer: ElementRef;
  messages: Observable<any[]>;
  mesSub: Subscription;
  lastdocid: string;

  constructor(public mesService: MessagedbService, public auth: AngularFireAuth, public router: Router) {
    if(this.auth.auth.currentUser === null){
      this.router.navigate(['/loginpage']);
    } else {
      this.email = this.auth.auth.currentUser.email;
      this.messages = mesService.getObservable();

      this.mesSub = this.messages.subscribe(data => {
        if(this.lastdocid && data[0].docid !== this.lastdocid ){
          console.log("new message: " + data[0].docid);
          this.scrollToBottom();
        }

        this.lastdocid = data[0].docid;
      });
    }
  }

  ngOnDestroy(): void {
    if(this.mesSub)
      this.mesSub.unsubscribe();
  }

  sendMessage(event){

    if(this.messageText.nativeElement.value && this.messageText.nativeElement.value !== ''){
      this.mesService.sendMessage({user: this.email, value: this.messageText.nativeElement.value, timestamp: Date.now()});
      this.messageText.nativeElement.value = "";
    }
    event.stopPropagation();
  }

  onMessageLike(docNum){
    this.mesService.likeMessage(docNum, this.email);
  }

  scrollToBottom() {
    try {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}

}
