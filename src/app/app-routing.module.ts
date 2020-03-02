import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ChatComponent } from './chat/chat.component';
import { SignupComponent } from './signup/signup.component';
import { MultiChatComponent } from './multi-chat-container/multi-chat.component';
import { inviteComponent } from './invite-link/invite.component';


const routes: Routes = [
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'signup', component: SignupComponent},
  { path: '', component: MultiChatComponent },
  { path: 'invite', component: inviteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
