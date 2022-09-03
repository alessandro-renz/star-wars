import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Character } from 'src/app/models/character';
import { StarWarsService } from 'src/app/star-wars.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  loading = false
  character!: Character
  constructor(
    private activatedRoute: ActivatedRoute,
    private starWarsService: StarWarsService
  ) { }
  
  ngOnInit() {
    this.loadCharacter()
  }

  private loadCharacter(){
    this.loading = true 
    this.starWarsService.getCharacter(this.activatedRoute.snapshot.queryParams['url'])
    .pipe(
      tap(char => this.character = char)
    )
    .subscribe(char => {
      this.loading = false
      console.log(char)
    })
  }
}
