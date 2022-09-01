import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
	{
		path: "",
		loadChildren: () => import("./characters/characters.module").then(m => m.CharactersModule)
	},
	{
		path: "guns",
		loadChildren: () => import("./guns/guns.module").then(m => m.GunsModule)
	},
	{
		path: "ships",
		loadChildren: () => import("./ships/ships.module").then( m => m.ShipsModule)
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
