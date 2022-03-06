import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
@Component({
  selector: 'app-menu',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '50px',
        width:'100%',
        opacity: 1,
        backgroundColor: 'white'
      })),
      state('closed', style({
        height: '50px',
        opacity: 1,
        backgroundColor: 'white'
      })),
      transition('open => closed', [
        animate('.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  constructor(public menuService: MenuService) { }
   
  ngOnInit(): void {
  }
   toggle() {
    this.menuService.isOpen = !this.menuService.isOpen;
  }
}
