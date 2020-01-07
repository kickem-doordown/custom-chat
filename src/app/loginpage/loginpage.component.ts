import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(public auth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }


  login(event){
    let user = event.target.elements[0].value;
    let pw = event.target.elements[1].value;

    this.auth.auth.signInWithEmailAndPassword(user, pw).then(cred =>{
      this.router.navigate(['']);
    }).catch(err => {
      console.log(err);
    });
  }
}
