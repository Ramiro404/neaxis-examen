import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: string[];
  constructor() {
    this.images = [
      './assets/images/img1.jpg',
      './assets/images/img2.jpg'
    ]
   }

  ngOnInit(): void {
  }

}
