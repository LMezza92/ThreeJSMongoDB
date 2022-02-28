import { Injectable } from '@angular/core';
import { AdItem } from '../ad-item';
import { FrameComponent } from '../frame/frame.component';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(
        FrameComponent,
        { name: 'Bombasto', bio: 'Brave as they come' , pic: "../assets/leaf.png"}
      ),
      new AdItem(
        FrameComponent,
        { name: 'Dr IQ', bio: 'Smart as they come', pic: "../assets/leaf.png" }
      ),
      new AdItem(
        FrameComponent,
        { name: 'Hiring for several positions', bio: 'Submit your resume today!', pic: "../assets/leaf.png"}
      ),
      new AdItem(
        FrameComponent,
        { name: 'Openings in all departments', bio: 'Apply today', pic: "../assets/leaf.png"}
      )
    ];
  }
}