import { Component, ViewChild, ElementRef, OnInit, OnDestroy, AfterViewInit, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MessagedbService } from '../messagedb.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { ChatdbService } from '../chatdb.service';

@Component({
  selector: 'app-multi-chat',
  templateUrl: './multi-chat.component.html',
  //styleUrls: ['./chat.component.css']
})
export class MultiChatComponent  {

  isShown: boolean = true;
  
  constructor(public chatdb: ChatdbService ) { }

  ngOnInit() {
    this.chatdb.chatChanged.subscribe(val => {
      console.log("test");
      this.reInit();
    });
  }

  reInit() {
    this.isShown = false;
    setTimeout(() => {
      this.isShown = true;
    })
  }

}