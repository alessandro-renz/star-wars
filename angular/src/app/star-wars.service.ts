import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './models/character';

@Injectable({
	providedIn: 'root'
})
export class StarWarsService {
	private readonly BASE_URL = 'https://swapi.dev/api';

	constructor(
		private http: HttpClient
	) { }

	listCharacters(page = 1): Observable<any> {
		if (page > 1) {
			page = page
		}
		return this.http.get(`${this.BASE_URL}/people?page=${page}`)
	}

	listShips(): Observable<any> {
		return this.http.get(`${this.BASE_URL}/starships`)
	}

	getCharacter(url: string): Observable<Character>{
		return this.http.get<Character>(url)	
	}
}
