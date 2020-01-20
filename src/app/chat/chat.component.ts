import { Component, ViewChild, ElementRef, OnDestroy, Renderer2, AfterViewInit } from '@angular/core';
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
export class ChatComponent implements OnDestroy, AfterViewInit{
  
  @ViewChild('messageText', {static: false}) 
  messageText: ElementRef;
  @ViewChild('chat', {static: false}) 
  chatContainer: ElementRef;
  @ViewChild('container', {static: false}) 
  container: ElementRef;

  email: string;
  messages: Observable<any>;
  mesArr: any[] = [];
  mesSub: Subscription;
  lastdocid: string;

  messageNum: number = 0;
  pageSize: number = 10;

  constructor(public mesService: MessagedbService, public auth: AngularFireAuth, public router: Router, public ren: Renderer2) {
    if(this.auth.auth.currentUser === null){
      this.router.navigate(['/loginpage']);
    } else {
      
      this.email = this.auth.auth.currentUser.email;
      this.messages = mesService.getRecentMessages(this.pageSize);
      this.messageNum = this.pageSize;

      this.messages.pipe(take(1)).subscribe(data => {
        console.log(data);
        this.mesArr= data.docs;
      });

      this.mesSub = mesService.getMessageUpdates().subscribe(data => {
        console.log(data);
      
        if(data[0].type === 'added' ) {
          console.log("new message: " + data[0].payload.doc.id);
          this.mesArr.unshift(data[0].payload.doc);
          this.messageNum++;
        }
      });
    }
  }

  ngAfterViewInit(){
    this.ren.setStyle(this.container.nativeElement, 'height', window.innerHeight + "px");
    window.addEventListener("resize", ()=>{
      this.ren.setStyle(this.container.nativeElement, 'height', window.innerHeight + "px");
    });

    this.chatContainer.nativeElement.addEventListener("scroll", ()=>{
      
      if( this.chatContainer.nativeElement.scrollTop == 0 && this.mesArr.length == this.messageNum){
        this.messageNum += this.pageSize;
        this.mesService.getPageAfter(this.pageSize, this.mesArr[this.mesArr.length-1]).subscribe((data)=>{
          console.log(this.messageNum);
          this.mesArr = this.mesArr.concat(data.docs);
        });
        console.log( "SCROLL");
      }
    });
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
    this.messageText.nativeElement.focus();
    event.stopPropagation();
  }

  onMessageLike(messageObj){
    this.mesService.likeMessage(messageObj, this.email);
    if(this.messageText.nativeElement.value) {
      this.messageText.nativeElement.focus();
    }
  }

  scrollToBottom() {
    try {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

}
