import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loggedIn: boolean;

  constructor(private location: Location) { }

  ngOnInit() {
    this.loggedIn = !(location.pathname === '/login');
  }

}
