import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { GunsRoutingModule } from './guns-routing.module';
import { GunsComponent } from './guns.component';


@NgModule({
  declarations: [
    GunsComponent
  ],
  imports: [
    CommonModule,
    GunsRoutingModule,
    SharedModule
  ]
})
export class GunsModule { }
