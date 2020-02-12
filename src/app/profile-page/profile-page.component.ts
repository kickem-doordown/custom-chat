import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  
  @ViewChild('displayURL', { static: false })
  displayURL: ElementRef;


  constructor(public auth: AuthService) {
   }
  
  ngOnInit() {
  }

  updateInfo(event) {
    
    this.auth.userData.updateProfile(
      {photoURL: this.displayURL.nativeElement.value}
    )
  }

}
