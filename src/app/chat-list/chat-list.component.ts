import { Component, OnInit, Inject } from '@angular/core';
import { ChatdbService } from '../chatdb.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  chats: Observable<any>;
  chatArr: any[] = [];

  chatDataArr: any[] = [];

  constructor(public chatdb: ChatdbService, public auth: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.chats = this.chatdb.getChats();
    this.chats.pipe(take(1)).subscribe(data => {
      this.chatArr = data;
    });
  }

  setChatID(chatID: string) {
    this.chatdb.setChatID(chatID);
  }

  addChat() {
    const dialogRef = this.dialog.open(CreateChatDialog, {
      width: '250px',
      data: {name: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result != null) {
        this.chatdb.createChat(result, this.auth.userData.uid);
      }
    });
  }

}

export interface ChatDialogData {
  name: string;
}

@Component({
  selector: 'app-create-chat-dialog',
  templateUrl: 'create-chat-dialog.html',
  styleUrls: ['create-chat-dialog.css']
})
export class CreateChatDialog {
  constructor(
    public dialogRef: MatDialogRef<CreateChatDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ChatDialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}