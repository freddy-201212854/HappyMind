import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Profile', url: '/folder/inbox', icon: 'profile' },
    { title: 'Promotions', url: '/promotion', icon: 'promotions' },
    { title: 'Coupons', url: '/folder/favorites', icon: 'coupon' },
    { title: 'Settings', url: '/folder/spam', icon: 'settings' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
