import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Game } from '../model/gameModel';

const URl = window.location.href;
@Injectable({
	providedIn: 'root'
})

export class GameService {

	path: string = "games";

	constructor(private httpClient: HttpClient) { }
	ngOnInit() {
		this.httpClient.get(`${URl}${this.path}`).subscribe(res => {
			console.log(res);

		});
		console.log(URl);
	}

	getListNewGames(): Observable<Game[]> {
		return this.httpClient.get<Game[]>(`${URl}${this.path}`);
	}
	getListPreSale(): Observable<Game[]> {
		return this.httpClient.get<Game[]>(`${URl}${this.path}`);
	}
	getListDemos(): Observable<Game[]> {
		return this.httpClient.get<Game[]>(`${URl}${this.path}`);
	}

}
