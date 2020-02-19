import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ChatComponent } from './chat/chat.component';
import { SignupComponent } from './signup/signup.component';
import { MultiChatComponent } from './multi-chat-container/multi-chat.component';


const routes: Routes = [
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'signup', component: SignupComponent},
  { path: '', component: MultiChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
