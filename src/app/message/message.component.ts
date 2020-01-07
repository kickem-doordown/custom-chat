import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MessagedbService } from '../messagedb.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()
  username;
  @Input()
  message;
  @Input()
  mesDoc;
  @Input()
  likesNum;
  @Output() liked: EventEmitter<any> = new EventEmitter();
  
  constructor(public mesService: MessagedbService) { }

  ngOnInit() {}

  likeMes(){
    this.liked.emit(this.mesDoc);
  }

}
