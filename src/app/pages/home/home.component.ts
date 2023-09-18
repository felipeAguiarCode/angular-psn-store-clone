import { Component, OnInit } from '@angular/core';
import { GameData } from 'src/app/models/gameData';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemsPerPage: number = 10;
  currentPage: number = 1;

  currentPageResults: GameData[] = [];
  constructor(
    private gameService: GamesService
  ) { }

  ngOnInit(): void {
    let result;
    this.gameService.getAllGames();
    this.gameService.onApiCallComplete().subscribe(() => {
      result = this.loadPage(1);
      console.log(result)
    });
  }

  loadPage(pageNumber: number): GameData[] {
    const startIndex = (pageNumber - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.currentPageResults = this.gameService.getAllResults().slice(startIndex, endIndex);
    this.currentPage = pageNumber;
    return this.currentPageResults;
  }

}
