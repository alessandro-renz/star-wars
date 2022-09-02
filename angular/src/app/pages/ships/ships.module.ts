import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './../shared/list/list.component';

import { ShipsRoutingModule } from './ships-routing.module';
import { ShipsComponent } from './ships.component';


@NgModule({
  declarations: [
    ShipsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ShipsRoutingModule
  ]
})
export class ShipsModule { }
