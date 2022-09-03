import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StarShipsRoutingModule } from './starships-routing.module';
import { StarShipsComponent } from './starships.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { StarWarsService } from 'src/app/star-wars.service';


@NgModule({
  declarations: [
    StarShipsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    StarShipsRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    StarWarsService
  ]
})
export class StarShipsModule { }
