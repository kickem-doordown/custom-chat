import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, ElementRef, ViewChild, AfterViewInit, SecurityContext, OnChanges } from '@angular/core';
import { MessagedbService } from '../messagedb.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatePipe } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import Autolinker from 'autolinker';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy, OnChanges {

  @ViewChild('likeContainer', { static: false })
  likeContainer: ElementRef;

  @Input()
  messageDoc: any;

  @Input()
  chatID: string;

  messageSub: Subscription;

  messageData: any;

  nsfw: boolean = false;
  nsfwVisible: boolean = false;

  loaded: boolean = false;

  imageVisible: boolean = false;

  heartVisible: boolean = false;

  heartColor: string = "hotpink";

  heartAnimation: string = "none";
  heartScale: string = "scale(1)";
  heartTextScale: string = "1";

  tweetId: string;
  youtubeId: string;
  imageUrl: string;
  messageText: string;
  photoURL: string;

  canLike = true;

  @Output() liked: EventEmitter<any> = new EventEmitter();

  constructor(public mesService: MessagedbService,
    public authService: AuthService) { }


  ngOnInit() {
    // if(this.messageDoc.loaded === undefined && this.messageDoc.value !== undefined){
    //   this.messageDoc.loaded = true;  //hacky solution for backwards compat with messages without loaded
    //   this.loaded = true;
    // } else 
    if (this.messageDoc.loaded === false) {
      this.messageData = this.messageDoc;
      this.sendMes();
      this.messageInit();
    } else {
      this.messageSub = this.mesService.getMessageData(this.chatID, this.messageDoc.id).subscribe(data => {
        this.loaded = true;
        this.messageData = data;
        this.messageInit();
      });
    }
  }

  messageInit() {
    let words = this.messageData.value.split(" ");

    for (let i = 0; i < words.length; i++) {
      //url check
      this.url_parser(words[i]);
      //image check
      if (words[i].match(/\.(jpeg|jpg|gif|png)$/) != null) {
        this.imageUrl = words[i];
      }
      //youtube check
      let yt = this.youtube_parser(words[i]);
      if (yt)
        this.youtubeId = yt;
      //twitter check
      let t = this.twitter_parser(words[i]);
      if (t)
        this.tweetId = t;
    }

    this.messageText = Autolinker.link(
      _.escape(this.messageData.value), {
      mention: 'twitter',
      truncate: { length: 32 }
    });

    this.nsfw = this.messageData.nsfw == null ? false : this.messageData.nsfw;
    this.nsfwVisible = this.nsfw;
    this.photoURL = this.messageData.photoURL == null ? "" : this.messageData.photoURL;
    this.updateHeart();
  }

  url_parser(url) {
    var regExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

    var match = url.match(regExp);
    if (match) {
      return match[0];
    } else {
      return undefined;
    }
  }

  youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7]) {
      return match[7];
    } else {
      return undefined;
    }
  }

  twitter_parser(url) {
    var match = url.match(/.*twitter.com\/.*\/status\/([0-9]+)/);
    if (match && match[1]) {
      return match[1].trim();
    } else {
      return undefined;
    }
  }

  sendMes() {
    console.log("sending message: ", this.messageData);
    if (this.messageData.value && this.messageData.value !== '') {
      this.mesService.sendMessage(this.chatID, this.messageData);
    }
  }

  likeMes() {
    let user = this.authService.userData.email;
    this.mesService.likeMessage(this.chatID, this.messageData, user).then(
      nil => {
        this.updateHeart();
        this.heartAnimation = this.heartVisible ? "pulse 1s ease" : "none";
      }
    );

    /*if (this.messageData.likeArr.includes(user)) {
    this.messageData.likeArr.splice(this.messageData.likeArr.indexOf(user), 1);
    } else {
    this.messageData.likeArr.push(user);
    }*/


  }

  messageStyle() {
    if (this.messageData) {
      if (this.messageData.uid === this.authService.userData.uid) {
        return { "background-color": "#e6faff" };
      }
    }
    return {};
  }

  updateHeart() {
    this.heartVisible = this.messageData.likeArr.includes(this.authService.userData.email);
    this.heartColor = this.heartVisible ? "red" : "lightgrey";
    var minSize = 5;
    var numLikes = Math.max(minSize, this.messageData.likeArr.length + minSize);
    var scale = .125;
    this.heartScale = "scale(" + numLikes * scale + ")";
    var unscaledTextSize = 16;
    this.heartTextScale = (16 * 1 / (scale * numLikes)) + "px";
  }

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

  ngOnChanges() {
    console.log(this.messageDoc)
  }

}
