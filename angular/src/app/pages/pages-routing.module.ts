import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
		path: "characters",
		loadChildren: () => import("./characters/characters.module").then(m => m.CharactersModule)
	},
	{
		path: "starships",
		loadChildren: () => import("./starships/starships.module").then( m => m.StarShipsModule)
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
