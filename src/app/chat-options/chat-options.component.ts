import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('displayURL', { static: false })
  displayURL: ElementRef;
  @ViewChild('displayName', { static: false })
  displayName: ElementRef;

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

  updateInfo(event) {
    let photoUrlStr = this.displayURL.nativeElement.value;
    let photoUrl = photoUrlStr != null &&
      photoUrlStr.replace(/\s/g, '').length > 0
      ? photoUrlStr 
      : this.chatData.photoURL;
    let displayNameStr = this.displayName.nativeElement.value;
    let displayName = displayNameStr != null &&
      displayNameStr.replace(/\s/g, '').length > 0
      ? displayNameStr
      : this.chatData.name;
    this.chatdb.updateCurChatData({
      photoURL: photoUrl,
      name: displayName
    });
    this.displayURL.nativeElement.value = "";
    this.displayName.nativeElement.value = "";
  }
  getInviteLink() {
    return this.window.location.href + "invite/?key=" + this.chatData.inviteLink;
  }

  leaveChat(){
    this.chatdb.leaveCurrentChat();
  }

}
