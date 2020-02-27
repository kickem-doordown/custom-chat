import { Component, OnInit } from '@angular/core';
import { ChatdbService } from '../chatdb.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-chat-options',
  templateUrl: './chat-options.component.html',
  styleUrls: ['./chat-options.component.css']
})
export class ChatOptionsComponent implements OnInit {

  chatData: any;

  constructor(public chatdb: ChatdbService) { }

  ngOnInit() {
    this.chatdb.chatIDObservable.subscribe(chatID => {
      if (chatID && chatID != undefined) {
        this.chatdb.getChatData(chatID).forEach(data => {
          this.chatData = data;
        });
      }
    });
  }

}
