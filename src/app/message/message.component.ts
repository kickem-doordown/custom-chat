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
  messageObj: any[];

  @Output() liked: EventEmitter<any> = new EventEmitter();
  
  constructor(public mesService: MessagedbService) { }

  ngOnInit() {}

  likeMes(){
    this.liked.emit(this.messageObj);
  }

}
