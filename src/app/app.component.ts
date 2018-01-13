import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from './services/user-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private location: Location, private userService: UserService) { }

  ngOnInit() {
  }

}
