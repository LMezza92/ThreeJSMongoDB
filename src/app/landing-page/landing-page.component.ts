import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdComponent } from '../interfaces/ad.component';
import { AdDirective } from '../ad.directive';
import { AdService } from '../services/ad.service';
import { gsap } from 'gsap';
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";


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

  constructor(private adService: AdService){}

  ngOnInit(): void {
    this.ads = this.adService.getAds();
    this.loadComponent();
    this.getAds();

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
      .fromTo(".container-landing", {backgroundColor: "#1b1f28" },{backgroundColor: "#d9d9d9" })
    }
}
