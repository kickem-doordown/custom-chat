import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MessagedbService } from '../messagedb.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatePipe } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy {

  @ViewChild('likeContainer', { static: false })
  likeContainer: ElementRef;

  @Input()
  messageDoc: any;

  messageSub: Subscription;

  messageData: any;

  imageVisible: boolean = false;

  heartVisible: boolean = false;

  heartColor: string = "hotpink";

  heartAnimation: string = "none";

  @Output() liked: EventEmitter<any> = new EventEmitter();

  constructor(public mesService: MessagedbService, public auth: AngularFireAuth) {}
  

  ngOnInit() {
    this.messageSub = this.mesService.getMessageData(this.messageDoc.id).subscribe(data => {
      this.messageData = data;
      if (this.messageData.value.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        this.imageVisible = true;
      }
      this.updateHeart();
    });
  }

  likeMes() {
    this.messageData.docid = this.messageDoc.id;
    this.liked.emit(this.messageData);
    this.updateHeart();
    this.heartAnimation = "pulse 1s ease"
  }

  updateHeart() {
    this.heartVisible = this.messageData.likeArr.includes(this.auth.auth.currentUser.email);
    this.heartColor = this.heartVisible ? "transparent" : "hotpink";
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

}
