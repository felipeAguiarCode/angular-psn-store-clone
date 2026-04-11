import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [
    {
      id: 1,
      title: "Battlefield 1",
      cover: "assets/bt-1.jpg",
      label: "DIGITAL",
      type: "DIGITAL | PS4",
      price: "R$ 129,99",
      category: "PS4"
    },
    {
      id: 2,
      title: "Battlefield 4",
      cover: "assets/bt-4.jpg",
      label: "EXCLUSIVE",
      type: "DISC | PS5",
      price: "R$ 269,99",
      category: "PS5"
    },
    {
      id: 3,
      title: "Assassin's Creed",
      cover: "assets/ac-cover.jpg",
      label: "BEST OF YEAR",
      type: "DIGITAL | PS5",
      price: "R$ 369,99",
      category: "Exclusive"
    },
    {
      id: 4,
      title: "Battlefield Hardline",
      cover: "assets/bt-hardline.jpg",
      label: "NEW",
      type: "DIGITAL | PS3 PS4 PS5",
      price: "R$ 369,99",
      category: "PS4"
    },
    {
      id: 5,
      title: "Battlefield 5",
      cover: "assets/bt-5.jpg",
      label: "DIGITAL",
      type: "DIGITAL | PS5",
      price: "R$ 189,99",
      category: "PS5"
    },
    {
      id: 6,
      title: "Battlefield Bad Company 2",
      cover: "assets/bt-bad-company-2.jpg",
      label: "CLASSIC",
      type: "DIGITAL | PS3",
      price: "R$ 79,99",
      category: "PS4"
    }
  ];

  constructor() { }

  getGames(): Observable<Game[]> {
    return of(this.games);
  }

  getHeroGame(): Game {
    return {
      id: 0,
      title: "God of War Ragnarök",
      cover: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/67vMo97o0Y8Nq7u0B6eN6i0u.png",
      label: "MUST PLAY",
      type: "DIGITAL | PS4 PS5",
      price: "R$ 349,99",
      category: "Exclusive"
    };
  }
}
