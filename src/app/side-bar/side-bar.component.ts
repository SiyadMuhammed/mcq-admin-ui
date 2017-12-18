import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent  {

  collapseSideMenu = true;

  constructor(private location: Location) {

  }

  toggleSideMenu () {
    this.collapseSideMenu = !this.collapseSideMenu;
  }

  isActive(route) {
    return location.pathname === route;
  }

}
