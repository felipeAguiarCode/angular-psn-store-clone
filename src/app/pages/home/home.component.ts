import { Component, OnInit } from '@angular/core';
import { Observable, map, range, toArray } from 'rxjs';
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
  totalGames: number = 0;
  totalPages: number = 0;
  teste:string = "vai";
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
    const result = this.gameService.getAllResults()
    this.totalGames = result.length;
    this.currentPageResults = result.slice(startIndex, endIndex);
    this.currentPage = pageNumber;
    console.log(this.totalGames)
    this.totalPages = Math.ceil(this.totalGames / this.itemsPerPage);
    return this.currentPageResults;
  }
  getPageNumbers(): Observable<number[]> {
    const totalPages = Math.ceil(this.totalGames / this.itemsPerPage);
    const currentPage = this.currentPage;
    const itemsToShow = 5; 

    let startPage = Math.max(1, currentPage - itemsToShow);
    let endPage = Math.min(totalPages, currentPage + itemsToShow);

    return range(startPage, endPage - startPage + 1).pipe(
      toArray() 
    );
  }
}

