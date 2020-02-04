import { Component, OnInit } from '@angular/core';
import { AuthService } from "../core/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }
  
  signup(event){
    let user = event.target.elements[0].value;
    let pw = event.target.elements[1].value;
    this.auth.SignUp(user, pw);
  }
}
