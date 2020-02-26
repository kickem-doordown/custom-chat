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
export class MultiChatComponent implements OnInit, AfterViewInit{

  @ViewChild('container', { static: false })
  container: ElementRef;  
  containerStyle = { "height": window.innerHeight + "px" };

  isShown: boolean = true;
  
  constructor(public chatdb: ChatdbService, public auth: AuthService, public router: Router ) { 
    if (localStorage.getItem('user') == null || this.auth.userData == null) {
      this.router.navigate(['/loginpage']);
    } 
  }

  ngOnInit() {
    this.chatdb.chatChanged.subscribe(val => {
      console.log("test");
      this.reInit();
    });
  }

  ngAfterViewInit() {
    window.addEventListener("resize", () => {
      this.containerStyle = { "height": window.innerHeight + "px" };
    });
  }

  reInit() {
    this.isShown = false;
    setTimeout(() => {
      this.isShown = true;
    })
  }

}