import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardRouteGuard } from './../../guard-route.guard';
import { DetailComponent } from './detail/detail.component';
import { StarShipsComponent } from './starships.component';

const routes: Routes = [
  {
    path: "",
    component: StarShipsComponent
  },
  {
    path: "starship",
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
export class StarShipsRoutingModule { }
