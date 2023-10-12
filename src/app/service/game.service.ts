import { Injectable } from '@angular/core';
import { dataFake } from '../components/data/dataFake';

@Injectable({
  providedIn: 'root',
})

export class GameService {

  constructor() { }

  getGameById(id: string | null) {
    return dataFake.find(({ id: idGame }) => idGame === id);
  }
}