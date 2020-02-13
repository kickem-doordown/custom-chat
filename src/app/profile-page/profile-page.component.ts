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
  @ViewChild('displayName', { static: false })
  displayName: ElementRef;


  constructor(public auth: AuthService) {
   }
  
  ngOnInit() {
  }

  updateInfo(event) {
    let photoUrlStr = this.displayURL.nativeElement.value;
    let photoUrl = photoUrlStr != null &&
      photoUrlStr.replace(/\s/g, '').length > 0
      ? photoUrlStr 
      : this.auth.userData.photoURL;
    let displayNameStr = this.displayName.nativeElement.value;
    let displayName = displayNameStr != null &&
      displayNameStr.replace(/\s/g, '').length > 0
      ? displayNameStr
      : this.auth.userData.displayName;
    this.auth.userData.updateProfile(
      {photoURL: photoUrl,
      displayName: displayName}
    )
  }

}
