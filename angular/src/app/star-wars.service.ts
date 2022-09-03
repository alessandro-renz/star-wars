import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './models/character';
import { StarShips } from './models/starships';

@Injectable({
	providedIn: 'root'
})
export class StarWarsService {
	private readonly BASE_URL = 'https://swapi.dev/api';

	constructor(
		private http: HttpClient
	) { }

	listCharacters(page = 1): Observable<Character[]> {
		if (page > 1) {
			page = page
		}
		return this.http.get<Character[]>(`${this.BASE_URL}/people?page=${page}`)
	}

	getCharacter(url: string): Observable<Character>{
		return this.http.get<Character>(url)	
	}

	listStarShips(page = 1): Observable<StarShips[]> {
		if (page > 1) {
			page = page
		}
		return this.http.get<StarShips[]>(`${this.BASE_URL}/starships?page=${page}`)
	}

	getStarShip(url: string): Observable<StarShips>{
		return this.http.get<StarShips>(url)	
	}
}
