import { Component, OnInit } from '@angular/core';
import { ChatdbService } from '../chatdb.service';
import { take } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '../core/window-provider';

@Component({
  selector: 'app-chat-options',
  templateUrl: './chat-options.component.html',
  styleUrls: ['./chat-options.component.css']
})
export class ChatOptionsComponent implements OnInit {

  chatData: any;

  constructor(public chatdb: ChatdbService, @Inject(WINDOW) private window: Window) { }

  ngOnInit() {
    this.chatdb.chatIDObservable.subscribe(chatID => {
      if (chatID && chatID != undefined) {
        this.chatdb.getChatData(chatID).forEach(data => {
          this.chatData = data;
        });
      }
    });
  }

  getInviteLink() {
    return this.window.location.href + "invite/?key=" + this.chatData.inviteLink;
  }

  leaveChat(){
    this.chatdb.leaveCurrentChat();
  }

}
