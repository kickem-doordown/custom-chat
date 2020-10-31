import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MessagingService } from './core/notifications/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private meta: Meta, private messagingService: MessagingService){
    this.meta.addTags([
      {'http-equiv': 'cache-control', 'content': 'no-cache, must-revalidate, post-check=0, pre-check=0'},
      {'http-equiv': 'expires', 'content': '0'},
      {'pragma': 'cache-control', 'content': 'no-cache'}
    ]);
  }
  message;
  ngOnInit() {
    // TODO get userID from auth
    const userId = 'user001';
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }

}
