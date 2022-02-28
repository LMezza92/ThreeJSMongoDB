import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../interfaces/ad.component';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit, AdComponent{
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
