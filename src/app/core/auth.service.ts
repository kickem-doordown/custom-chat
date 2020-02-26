import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userData: firebase.User;
  isReady: Promise<any>;

  constructor(public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /*wrapping in promise to delay bootstrap until finished*/
    this.isReady = new Promise((resolve) => {

       /* Saving user data as an object in localstorage if logged out than set to null */
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user; // Setting up user data in userData var
          localStorage.setItem('user', JSON.stringify(this.userData));
          resolve();
          this.router.navigate(['']);
        } else {
          localStorage.setItem('user', null);
          resolve();
          if (!this.router.navigated) {
            this.router.navigate(['/loginpage']);
          }
        }
      });
      
    });
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("You have been successfully registered!");
        console.log(result.user)
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign out 
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/loginpage']);
    })
  }
}
