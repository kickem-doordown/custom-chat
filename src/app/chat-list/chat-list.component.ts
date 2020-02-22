import { Component, OnInit } from '@angular/core';
import { ChatdbService } from '../chatdb.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  chats: Observable<any>;
  chatArr: any[] = [];

  chatDataArr: any[] = [];

  constructor(public chatdb: ChatdbService ) { }

  ngOnInit() {
    this.chats = this.chatdb.getChats();
    this.chats.pipe(take(1)).subscribe(data => {
      this.chatArr = data;
    });
  }

  setChatID(chatID: string) {
    this.chatdb.setChatID(chatID);
    console.log(this.chatdb.chatID);
  }

}
