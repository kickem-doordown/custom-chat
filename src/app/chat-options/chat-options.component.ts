import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatdbService } from '../chatdb.service';
import { take } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '../core/window-provider';
import { AuthService } from '../core/auth.service';

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

  constructor(public chatdb: ChatdbService, public auth: AuthService, @Inject(WINDOW) private window: Window) { }

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

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  leaveChat(){
    this.chatdb.leaveCurrentChat();
  }

}
