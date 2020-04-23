import { Component, ViewChild, ElementRef, OnInit, OnDestroy, AfterViewInit, AfterContentInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MessagedbService } from '../messagedb.service';
import { take } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { ChatdbService } from '../chatdb.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('messageText', { static: false })
  messageText: ElementRef;
  @ViewChild('chat', { static: false })
  chatContainer: ElementRef;
  @ViewChild('container', { static: false })
  container: ElementRef;  


  @Input()
  chatID: string = '';

  @Input()
  chatName: string = '';

  messages: Observable<any>;
  mesArr: any[] = [];
  mesSub: Subscription;
  lastdocid: string;

  messageNum: number = 0;
  pageSize: number = 10;
  containerStyle = { "height": window.innerHeight + "px" };
  isScrolledToBottom: boolean = true;

  nsfw: boolean = false;

  constructor(public chatdb: ChatdbService,public mesService: MessagedbService, public auth: AuthService) {}

  ngOnInit() {
    this.chatdb.chatIDObservable.subscribe(ref => {
      this.messages = this.mesService.getRecentMessages(ref, this.pageSize);
      this.messageNum = this.pageSize;
  
      this.messages.pipe(take(1)).subscribe(data => {
        this.mesArr = data.docs;
      });
  
      this.mesSub = this.mesService.getMessageUpdates(ref).subscribe(data => {
        console.log(data);
  
        if (data[0].type === 'added') {
          console.log("new message: " + data[0].payload.doc.id);
          let mesIndex = this.mesArr.findIndex(mes =>{return mes.docid === data[0].payload.doc.id});
          if(mesIndex != -1){
            this.mesArr[mesIndex].loaded = true;
          } else {
            this.scrollCheck();
            this.mesArr.unshift(data[0].payload.doc);
            this.messageNum++;
            this.scrollToBottom();
          }
        }
      });
    });
    // Hacky fix to trigger the above event listener
    this.chatdb.setChatID(this.chatdb.getChatID());

    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  ngAfterViewInit() {
    window.addEventListener("resize", () => {
      this.containerStyle = { "height": window.innerHeight + "px" };
    });

    this.chatContainer.nativeElement.addEventListener("scroll", () => {

      if (this.chatContainer.nativeElement.scrollTop == 0 && this.mesArr.length == this.messageNum) {
        this.messageNum += this.pageSize;
        this.mesService.getPageAfter(this.chatdb.getChatID(), this.pageSize, this.mesArr[this.mesArr.length - 1]).subscribe((data) => {
          console.log(this.messageNum);
          this.mesArr = this.mesArr.concat(data.docs);
        });
        console.log("SCROLL");
      }
    });
  }

  ngOnDestroy(): void {
    if (this.mesSub)
      this.mesSub.unsubscribe();
  }

  sendMessage(event, buttonType) {
    let username =  buttonType === "normal"
    ? (this.auth.userData.displayName != null ? this.auth.userData.displayName : this.auth.userData.email)
    : "[anon]";


    let messageObj = {
      docid : Date.now() + this.auth.userData.uid,
      uid : this.auth.userData.uid,
      displayName: username,
      value: this.messageText.nativeElement.value,
      nsfw: this.nsfw,
      loaded: false,
      photoURL: buttonType === "normal" ? this.auth.userData.photoURL : "",
      likeArr : [],
      timestamp : Date.now()
    };

    if (messageObj.value && messageObj.value !== '') {
      this.mesService.sendMessage("chat1", messageObj);

      this.messageText.nativeElement.value = "";
    }
    this.messageText.nativeElement.focus();
    event.stopPropagation();
  }

  // onMessageLike(messageObj) {
  //   let user = this.auth.userData.email;
  //   this.mesService.likeMessage(messageObj, user);
  //   if (messageObj.likeArr.includes(user)) {
  //     messageObj.likeArr.splice(messageObj.likeArr.indexOf(user), 1);
  //   } else {
  //     messageObj.likeArr.push(user);
  //   }
  //   if (this.messageText.nativeElement.value) {
  //     this.messageText.nativeElement.focus();
  //   }
  // }

  scrollToBottom() {
    setTimeout(()=>{
      try {
        let elem = this.chatContainer.nativeElement;
        if(this.isScrolledToBottom){
          console.log("scroll");
          elem.scrollTop = elem.scrollHeight;
          console.log(elem.scrollTop);
        }
      } catch (err) { 
        console.error(err);
      }
    }, 10);
  }

  scrollCheck(){
    try{
      let elem = this.chatContainer.nativeElement;
      this.isScrolledToBottom = elem.scrollHeight - elem.clientHeight <= elem.scrollTop + 1;
    } catch (err){
      console.error(err)
    }
  }

}
