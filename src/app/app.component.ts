import { Component } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './services/ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ads: AdItem[] = [];

  title = 'angular-heroku-test';


  constructor(private adService: AdService) {}

  ngOnInit() {
  }
  
}
