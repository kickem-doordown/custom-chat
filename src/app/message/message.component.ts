import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MessagedbService } from '../messagedb.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  MessageData: any[];

  @Input()
  username;
  @Input()
  message;
  @Input()
  mesDoc;
  @Input()
  likesNum;
  @Input()
  timestamp;
  @Output() liked: EventEmitter<any> = new EventEmitter();
  
  constructor(public mesService: MessagedbService) { }

  ngOnInit() {}

  likeMes(){
    this.liked.emit(this.mesDoc);
  }

}
