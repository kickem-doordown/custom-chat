import { Component, OnInit } from '@angular/core';
import { AuthService } from "../core/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }


  login(event){
    let user = event.target.elements[0].value;
    let pw = event.target.elements[1].value;
    this.auth.SignIn(user, pw);
  }
}
