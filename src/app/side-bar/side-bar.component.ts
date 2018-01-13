import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  // collapseSideMenu = false;

  constructor(private location: Location, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    // this.collapseSideMenu = this.userService.collapseSideMenu;
  }

  toggleSideMenu () {
    // this.collapseSideMenu = !this.collapseSideMenu;
    this.userService.toggleSideMenu();
  }

  collapseSideMenu () {
    return this.userService.collapseSideMenu;
  }

  isActive(route) {
    return this.router.url === route;
  }

  logout() {
    this.userService.logout();
  }
}
