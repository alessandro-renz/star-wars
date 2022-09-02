import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class StarWarsService {
	private readonly BASE_URL = 'https://swapi.dev/api';

	constructor(
		private http: HttpClient
	) { }

	listCharacters(): Observable<any> {
		return this.http.get(`${this.BASE_URL}/people`)
	}

  listShips(): Observable<any> {
		return this.http.get(`${this.BASE_URL}/starships`)
	}
}
