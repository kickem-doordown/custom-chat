import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor(public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data as an object in localstorage if logged out than set to null */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user; // Setting up user data in userData var
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.router.navigate(['']);
      } else {
        localStorage.setItem('user', null);
        this.router.navigate(['/loginpage']);
      }
      
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

  // Sign out 
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/loginpage']);
    })
  }
}
