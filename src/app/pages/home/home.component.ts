import { Component, OnInit } from '@angular/core';
import { GameData } from 'src/app/models/gameData';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemsPerPage: number = 5;
  currentPage: number = 1;

  currentPageResults: GameData[] = [];
  constructor(
    private gameService: GamesService
  ) { }

  ngOnInit(): void {
    this.gameService.getAllGames();
    this.gameService.onApiCallComplete().subscribe(() => {
     this.loadPage(1);
    });
  }

  loadPage(pageNumber: number): GameData[] {
    const startIndex = (pageNumber - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.currentPageResults = this.gameService.getAllResults().slice(startIndex, endIndex);
    this.currentPage = pageNumber;
    console.log(this.currentPageResults)
    return this.currentPageResults;
  }

}
