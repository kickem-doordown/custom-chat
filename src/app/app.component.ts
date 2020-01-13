import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private meta: Meta){
    this.meta.addTags([
      {'http-equiv': 'cache-control', 'content': 'no-cache, must-revalidate, post-check=0, pre-check=0'},
      {'http-equiv': 'expires', 'content': '0'},
      {'pragma': 'cache-control', 'content': 'no-cache'}
    ]);
  }

}
