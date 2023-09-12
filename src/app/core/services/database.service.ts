import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../Interface/response_api.interface';


@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	constructor(private http: HttpClient) { }

	getBase(): Observable<Response[] | undefined> {
		return this.http.get<Response[]>("http://localhost:3000/API")
	}

	getHeader(): Observable<Response[] | undefined> {
		return this.http.get<Response[]>("http://localhost:3000/header")
	}

}
