import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { PaginateComponent } from './paginate/paginate.component';



@NgModule({
  declarations: [
    ListComponent,
    PaginateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    PaginateComponent
  ]
})
export class SharedModule { }
