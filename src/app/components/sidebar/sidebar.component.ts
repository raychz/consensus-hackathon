import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'farmers', title: 'Farmers',  icon:'nature_people', class: '' },
    { path: 'restaurants', title: 'Restaurants',  icon:'store', class: '' },
    { path: 'user-profile', title: 'My Profile',  icon:'person', class: '' },
    { path: 'dashboard', title: 'Analytics',  icon: 'dashboard', class: '' },
    // { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: 'maps', title: 'Nearby VeriFood',  icon:'location_on', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
