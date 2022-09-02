import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { StarWarsService } from './../../star-wars.service';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
	loading = false
	characters!: Array<{}>
  subscription!: Subscription

	constructor(
		private starWarsService: StarWarsService
	) { }

	ngOnInit() {
		this.loadCharacters()
	}

	private loadCharacters(){
		this.loading = true
		this.subscription = this.starWarsService.listCharacters()
    .pipe(
      tap(response => this.characters = response)
    )
    .subscribe(characteres => {
      console.log(characteres)
      this.loading = false
    })
	}

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
