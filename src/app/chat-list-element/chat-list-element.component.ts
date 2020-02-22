import { Component, OnInit, Input } from '@angular/core';
import { ChatdbService } from '../chatdb.service';

@Component({
  selector: 'app-chat-list-element',
  templateUrl: './chat-list-element.component.html',
  styleUrls: ['./chat-list-element.component.css']
})
export class ChatListElementComponent implements OnInit {

  @Input()
  chat: any;

  chatData: any;

  constructor(public chatdb: ChatdbService) { }

  ngOnInit() {      
    this.chatdb.getChatData(this.chat.id).subscribe(data => {
    this.chatData = data;
  });
  }

}
