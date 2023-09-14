import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  games = [
    {
      gameCover: 'assets/spiderman.avif',
      gameLabel: 'DIGITAL',
      gameType: 'DIGITAL | PS4 PS5',
      gamePrice: 'R$ 399,50'
    },
    {
      gameCover: 'assets/2k24.avif',
      gameLabel: 'DIGITAL',
      gameType: 'DIGITAL | PS4 PS5',
      gamePrice: 'R$ 499,50'
    },
    {
      gameCover: 'assets/fifa24.avif',
      gameLabel: 'DIGITAL',
      gameType: 'DIGITAL | PS4 PS5',
      gamePrice: 'R$ 528,90'
    },
    {
      gameCover: 'assets/callofduty.avif',
      gameLabel: 'EXCLUSIVE',
      gameType: 'DISC | PS5',
      gamePrice: 'R$ 299,99'
    },
    {
      gameCover: 'assets/nour.avif',
      gameLabel: 'BEST OF YEAR',
      gameType: 'DIGITAL | PS5',
      gamePrice: 'R$ 79,90'
    },
    {
      gameCover:'assets/eternights.avif',
      gameLabel: 'STUDIOSAI',
      gameType: 'DIGITAL | PS4 PS5',
      gamePrice: 'R$ 149,50'
    }
  ];
}
