import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { StarShips } from 'src/app/models/starships';
import { StarWarsService } from 'src/app/star-wars.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  loading = false
  starship!: StarShips
  subscription!: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private starWarsService: StarWarsService
  ) { }
  
  ngOnInit() {
    this.loadStarShip()
  }

  private loadStarShip(){
    this.loading = true 
    this.subscription = this.starWarsService.getStarShip(this.activatedRoute.snapshot.queryParams['url'])
    .pipe(
      tap(starship => this.starship = starship)
    )
    .subscribe(starship => {
      this.loading = false
      console.log(starship)
    })
  }

  ngOnDestroy(){
		this.subscription.unsubscribe()
	}
}
