import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { ChatdbService } from '../chatdb.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

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

  options = {
    displayName: "",
    photoURL: ""
  }

  controls: FormGroup

  constructor(public auth: AuthService, public chatdb: ChatdbService) {
  }

  ngOnInit() {
    this.controls = new FormGroup({
      displayName: new FormControl(this.auth.userData.displayName),
      photoURL: new FormControl(this.auth.userData.photoURL)
    });
    this.options = {
      displayName: this.auth.userData.displayName,
      photoURL: this.auth.userData.photoURL
    }
  }

  sanitizeData(data) {
    // TODO make this work I was too lazy
    /* if (data.photoURL) {
      data.photoURL = data.photoURL.replace(/\s/g, '').length > 0
        ? data.photoURL
        : this.auth.userData.photoURL;
    } else {
      delete data.photoURL
    }
    if (data.displayName) {
      data.displayName = data.displayName.replace(/\s/g, '').length > 0
        ? data.displayName
        : this.auth.userData.displayName;
    } else {
      delete data.displayName
    } */

  }

  getControl(field: string): FormControl {
    return this.controls.get(field) as FormControl;
  }

  updateField(field: string) {
    if (this.controls.valid) {
      let data = this.controls.value;
      this.sanitizeData(data);
      this.sendUpdate(data);
      this.options = data;
    }
  }

  sendUpdate(data) {
    // TODO need to separate these/ create a way to update display name for general profile,
    // and another for just current chat nickname.
    console.log(data);
    this.auth.userData.updateProfile(
      data
    );

    this.chatdb.setDisplayName(this.auth.userData.uid, data.displayName);
  }

}
