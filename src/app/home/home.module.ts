import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
