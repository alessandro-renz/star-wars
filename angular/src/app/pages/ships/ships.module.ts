import { SharedModule } from './../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShipsRoutingModule } from './ships-routing.module';
import { ShipsComponent } from './ships.component';


@NgModule({
  declarations: [
    ShipsComponent
  ],
  imports: [
    CommonModule,
    ShipsRoutingModule,
    SharedModule
  ]
})
export class ShipsModule { }
