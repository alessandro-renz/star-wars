import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './../shared/list/list.component';

import { GunsRoutingModule } from './guns-routing.module';
import { GunsComponent } from './guns.component';


@NgModule({
  declarations: [
    GunsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    GunsRoutingModule
  ]
})
export class GunsModule { }
