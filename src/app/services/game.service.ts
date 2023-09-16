import { Injectable } from '@angular/core';

import { dataFake } from '../data/dataFake';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  getDataById(id: string) {
    return dataFake.find(article => article.id === id);
  }

  constructor() { }
}
