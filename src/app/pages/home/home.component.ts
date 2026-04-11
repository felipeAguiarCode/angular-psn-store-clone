import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: Game[] = [];
  filteredGames: Game[] = [];
  heroGame!: Game;
  selectedCategory: string = 'All';

  constructor(private gameService: GameService) {
    this.heroGame = this.gameService.getHeroGame();
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(data => {
      this.games = data;
      this.filteredGames = data;
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredGames = this.games;
    } else {
      this.filteredGames = this.games.filter(game => game.category === category);
    }
  }

}
