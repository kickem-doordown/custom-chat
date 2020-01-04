import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagedbService } from './messagedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('messageText', {static: false}) messageText: ElementRef;
  messages: Observable<any[]>;

  constructor(public mesService: MessagedbService) {
    this.messages = mesService.getObservable();
  }

  sendMessage(event){

   //Date.now()
    this.mesService.sendMessage({user: "jmk", value: this.messageText.nativeElement.value, timestamp: Date.now()});
    this.messageText.nativeElement.value = "";

    event.stopPropagation();
  }
}
