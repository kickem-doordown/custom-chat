import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MessagedbService } from '../messagedb.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatePipe } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy {

  @ViewChild('likeContainer', { static: false })
  likeContainer: ElementRef;

  @Input()
  messageDoc: any;

  messageSub: Subscription;

  messageData: any;

  imageVisible: boolean = false;

  heartVisible: boolean = false;

  heartColor: string = "hotpink";

  heartAnimation: string = "none";
  heartScale: string = "scale(1)";
  heartTextScale: string = "1";
  
  tweetId: string;
  youtubeId: string;
  imageUrl: string;

  @Output() liked: EventEmitter<any> = new EventEmitter();

  constructor(public mesService: MessagedbService, public auth: AngularFireAuth) {}
  

  ngOnInit() {
    this.messageSub = this.mesService.getMessageData(this.messageDoc.id).subscribe(data => {
      this.messageData = data;

      let words = this.messageData.value.split(" ");

      for(let i = 0; i < words.length; i++){
        //url check
        this.url_parser(words[i]);
        
        //image check
        if (words[i].match(/\.(jpeg|jpg|gif|png)$/) != null) {
          this.imageUrl = words[i];
        }

        //youtube check
        let yt = this.youtube_parser(words[i]);
        if(yt)
          this.youtubeId = yt;
        
        //twitter check
        let t = this.twitter_parser(words[i]);
        if(t)
          this.tweetId = t; 
      }
      this.updateHeart();
    });
  }

  url_parser(url){
    var regExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    
    var match = url.match(regExp);
    if(match) {
      return match[0];
    } else {
      return undefined;
    }
  }

  youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if(match && match[7]){
      return match[7];
    } else {
      return undefined;
    }
  }

  twitter_parser(url){
    var match = url.match(/.*twitter.com\/.*\/status\/([0-9]+)/);
    if(match && match[1]) {
      return match[1].trim();
    } else {
      return undefined;
    }
  }

  likeMes() {
    this.messageData.docid = this.messageDoc.id;
    this.liked.emit(this.messageData);
    this.updateHeart();
  }

  updateHeart() {
    this.heartVisible = this.messageData.likeArr.includes(this.auth.auth.currentUser.email);
    this.heartColor = this.heartVisible ? "transparent" : "hotpink";
    this.heartAnimation = this.heartVisible ? "pulse 1s ease" : "none";
    var minSize = 5;
    var numLikes = Math.max(minSize, this.messageData.likeArr.length + minSize);
    var scale = .125;
    this.heartScale = "scale(" + numLikes*scale + ")";
    var unscaledTextSize = 16;
    this.heartTextScale = (16*1/(scale*numLikes)) + "px";
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

}
