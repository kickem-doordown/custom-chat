import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { MessagedbService } from '../messagedb.service';
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

  @Output() liked: EventEmitter<any> = new EventEmitter();

  constructor(public mesService: MessagedbService) {}
  

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
  }

  updateHeart() {
    this.heartVisible = this.messageData.likeArr.includes(this.messageData.user);
    this.heartColor = this.heartVisible ? "transparent" : "hotpink";
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

}
