import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from '../ad-banner/ad-item';
import { AdComponent } from '../interfaces/ad.component';

import { AdService } from '../services/ad.service';
import { gsap } from 'gsap';
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AdDirective } from '../ad-banner/ad.directive';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {


  ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  interval: any;

  constructor(private adService: AdService, public menuService: MenuService){}

  ngOnInit(): void {
    this.ads = this.adService.getAds();
    this.loadComponent();
    this.getAds();
    console.log("new")
    gsap.registerPlugin(ScrollTrigger, Draggable);
    this.initScrollTriggers();


    
    }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}




  initScrollTriggers() {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".container-landing",
          pin: false,
          scrub:true,
          start: "top top",
          end: "bottom center",
          markers: false,
        }
      })
      .fromTo(".container-landing", {backgroundColor: "#FDF6E3" },{backgroundColor: "#FDF6E3" })
    }
}
