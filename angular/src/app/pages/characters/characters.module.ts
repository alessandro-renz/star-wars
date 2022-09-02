import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './../shared/list/list.component';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';


@NgModule({
  declarations: [
    CharactersComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
