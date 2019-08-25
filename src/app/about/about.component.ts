import { Component, OnInit } from '@angular/core';
import 'jarallax';
declare var jarallax: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngAfterViewInit() {
    jarallax.document.querySelector('.jarallax'), {
      speed: 0.2
    }
  }

  ngOnInit() {
  }

}
