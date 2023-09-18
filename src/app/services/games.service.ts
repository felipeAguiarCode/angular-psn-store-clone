import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameData } from '../models/gameData';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private baseUrl: string = '';
  private allResults: GameData[] = [];

  private apiCallCompleteSubject = new Subject<void>();
  private httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'f7MoMGUbuLmshKEI4caExePt4aCAp1SID4EjsnX57i85joFPfh',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    })
  };
  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = environment.freeGameApi
  }


  getAllGames(): void {
  
    this.httpClient.get<GameData[]>(this.baseUrl, this.httpOptions).subscribe(results => {
      this.allResults = results;
 
      this.apiCallCompleteSubject.next();
    });
  }

  getAllResults(): GameData[] {
    return this.allResults;
  }

  // Função para observar quando a chamada à API estiver concluída
  onApiCallComplete(): Observable<void> {
    return this.apiCallCompleteSubject.asObservable();
  }
}
