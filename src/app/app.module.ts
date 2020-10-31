import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from "./core/auth.service";
import { environment } from '../environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MessageComponent } from './message/message.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MatIconModule } from '@angular/material/icon';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxTweetModule } from "ngx-tweet";
import { MatSidenavModule } from '@angular/material/sidenav';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SignupComponent } from './signup/signup.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MultiChatComponent } from './multi-chat-container/multi-chat.component';
import { ChatListComponent, CreateChatDialog } from './chat-list/chat-list.component';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { ChatOptionsComponent } from './chat-options/chat-options.component';
import { MatDialogModule } from '@angular/material/dialog';
import { inviteComponent } from './invite-link/invite.component';
import { WINDOW_PROVIDERS } from './core/window-provider';
import { EditModeDirective } from './core/editable/edit-mode.directive';
import { ViewModeDirective } from './core/editable/view-mode.directive';
import { EditableOnEnterDirective } from './core/editable/editable-on-enter.directive';
import { EditableComponent } from './core/editable/editable.component';
import { MessagingService } from './core/notifications/messaging.service';
import { AngularFireMessaging } from '@angular/fire/messaging';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    LoginpageComponent,
    ChatComponent,
    SignupComponent,
    ProfilePageComponent,
    MultiChatComponent,
    ChatListComponent,
    ChatOptionsComponent,
    CreateChatDialog,
    inviteComponent,
    EditModeDirective,
    ViewModeDirective,
    EditableOnEnterDirective,
    EditableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    NgxTweetModule,
    YouTubePlayerModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    WINDOW_PROVIDERS, MessagingService, AngularFireMessaging],
  entryComponents: [AppComponent, CreateChatDialog]
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private auth: AuthService) { }

  async ngDoBootstrap(appRef: ApplicationRef) {
    await this.auth.isReady;
    appRef.bootstrap(AppComponent);
  }
}
