import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { StarShips } from 'src/app/models/starships';
import { StarWarsService } from 'src/app/star-wars.service';

@Component({
  selector: 'app-ships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarShipsComponent implements OnInit, OnDestroy {
  subscription!: Subscription
  loading = false
  starShips!: StarShips[]
  qtdStarShips!: number
  linkNext!: string
  linkPrevious!: string

  constructor(
    private starWarsService: StarWarsService
  ) { }

  ngOnInit() {
    this.loadStarShips()
  }

  private loadStarShips(page?: number){
		this.loading = true
		this.subscription = this.starWarsService.listStarShips(page)
		.pipe(
			tap((response: any) => {
				this.starShips = response.results
				this.qtdStarShips = response.count
				this.linkNext = response.next
				this.linkPrevious = response.previous
			})
		)
		.subscribe(() => {
			this.loading = false
      console.log('this.starShips', this.starShips)
		})
	}

  goToPrevious(){
		if(!this.linkPrevious){
			return
		}
		let length = this.linkPrevious.length - 1
		let page = this.linkPrevious.slice(length)
		
		this.loadStarShips(parseInt(page))
	}

	goToNext(){
		if(!this.linkNext){
			return
		}
		let length = this.linkNext.length - 1
		let page = this.linkNext.slice(length)
		
		this.loadStarShips(parseInt(page))
	}

  ngOnDestroy(){
		this.subscription.unsubscribe()
	}
}
