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
  styleUrls: ['./multi-chat.component.css']
})
export class MultiChatComponent implements AfterViewInit{

  @ViewChild('container', { static: false })
  container: ElementRef;  
  containerStyle = { "height": window.innerHeight + "px" };

  isShown: boolean = false;

  
  constructor(public chatdb: ChatdbService ) { }


  ngAfterViewInit() {
    window.addEventListener("resize", () => {
      this.containerStyle = { "height": window.innerHeight + "px" };
    });
  }

}