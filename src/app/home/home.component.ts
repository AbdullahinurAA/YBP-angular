import { Component, OnInit, HostListener } from '@angular/core';
import { CarouselConfig } from 'ng-uikit-pro-standard'
import Glide from '@glidejs/glide';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(config: CarouselConfig) {
    config.interval = 10000;
    config.noWrap = false;
    config.keyboard = false;
    config.noPause = false;

 
 
    console.log()
  }

  ngOnInit() {
    
    new Glide('.glide', {
      type: 'carousel',
      perView: 4,
      focusAt: 'center',
      breakpoints: {
        800: {
          perView: 2
        },
        480: {
          perView: 1
        }
      }
    }).mount()
  }

  



}
