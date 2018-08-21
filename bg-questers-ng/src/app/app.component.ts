import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD0TRpD_HcsXhEKRr7WgvmvfQ1dPr3JGag',
      authDomain: 'bg-questers-d161a.firebaseapp.com'
    });
  }
}
