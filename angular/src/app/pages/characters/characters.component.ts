import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { Character } from 'src/app/models/character';
import { StarWarsService } from './../../star-wars.service';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
	loading = false
	qtdCharacters!: number
	characters!: Array<Character>
  	subscription!: Subscription
	linkNext!: string
	linkPrevious!: string

	constructor(
		private starWarsService: StarWarsService
	) { }

	ngOnInit() {
		this.loadCharacters()
	}

	goToPrevious(){
		if(!this.linkPrevious){
			return
		}
		let length = this.linkPrevious.length - 1
		let page = this.linkPrevious.slice(length)
		
		this.loadCharacters(parseInt(page))
	}

	goToNext(){
		if(!this.linkNext){
			return
		}
		let length = this.linkNext.length - 1
		let page = this.linkNext.slice(length)
		
		this.loadCharacters(parseInt(page))
	}

	private loadCharacters(page?: number){
		this.loading = true
		this.subscription = this.starWarsService.listCharacters(page)
		.pipe(
			tap((response: any) => {
				this.characters = response.results
				this.qtdCharacters = response.count
				this.linkNext = response.next
				this.linkPrevious = response.previous
			})
		)
		.subscribe(() => {
			this.loading = false
		})
	}

	ngOnDestroy(){
		this.subscription.unsubscribe()
	}
}
