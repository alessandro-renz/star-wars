import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StarWarsService } from './../../star-wars.service';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    StarWarsService
  ]
})
export class CharactersModule { }
