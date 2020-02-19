import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material'
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from "./core/auth.service";
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
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
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { MultiChatComponent } from './multi-chat-container/multi-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    LoginpageComponent,
    ChatComponent,
    SignupComponent,
    ProfilePageComponent,
    MultiChatComponent
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
    MatMenuModule
  ],
  providers: [AuthService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
