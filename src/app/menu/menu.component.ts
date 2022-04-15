import { Component, OnInit } from '@angular/core';
export interface MenuItem {
  title: string;
  link: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() {
    this.setMenuItems();
  }

  ngOnInit(): void {
  }
  setMenuItems() {
    this.items.push({ title: 'Dog', link: 'dog' });
    this.items.push({ title: 'Cat', link: 'cat' });
    this.items.push({ title: 'MyApi', link: 'myApi' });
  }
}
