import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardRouteGuard } from './../../guard-route.guard';
import { CharactersComponent } from './characters.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: "",
    component: CharactersComponent
  },
  {
    path: 'character',
    component: DetailComponent,
    canActivate: [
      GuardRouteGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
