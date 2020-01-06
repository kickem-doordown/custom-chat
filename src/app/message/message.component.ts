import { Component, OnInit, Input } from '@angular/core';
import { MessagedbService } from '../messagedb.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()
  username;
  @Input()
  message;
  @Input()
  mesDoc;
  @Input()
  likesNum;
  
  constructor(public mesService: MessagedbService) { }

  ngOnInit() {
  }

  getLikes(){
      //return this.mesService.getLikes(this.mesDoc);
  }

  likeMes(){
    this.mesService.likeMessage(this.mesDoc, this.username);
  }

}
