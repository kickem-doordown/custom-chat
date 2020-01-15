import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MessagedbService } from '../messagedb.service';
import { DatePipe } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy {

  @Input()
  messageDoc: any;

  messageSub: Subscription;

  messageData: any;

  @Output() liked: EventEmitter<any> = new EventEmitter();
  
  constructor(public mesService: MessagedbService) {
   
   }

  ngOnInit() {
    this.messageSub = this.mesService.getMessageData(this.messageDoc.id).subscribe(data =>{
      this.messageData = data;
    });
  }

  likeMes(){
    this.messageData.docid = this.messageDoc.id;
    this.liked.emit(this.messageData);
  }

  ngOnDestroy(){
    this.messageSub.unsubscribe();
  }

}
