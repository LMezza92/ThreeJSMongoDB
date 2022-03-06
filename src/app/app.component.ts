import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { AdItem } from './ad-banner/ad-item';
import { slideInAnimation } from './animations';
import { AdService } from './services/ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    ]
})
export class AppComponent {
  ads: AdItem[] = [];

  title = 'angular-heroku-test';

 
  constructor(private adService: AdService,private contexts: ChildrenOutletContexts) {}

  ngOnInit() {
    
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  
}
