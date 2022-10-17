import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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

 
  constructor(private adService: AdService,
              private contexts: ChildrenOutletContexts,
              private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  } 

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  
}
