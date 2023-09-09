import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/gameModel';
import { GameService } from 'src/app/services/game.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	listOptions: string[] = [
		"ps01",
		"ps02",
		"ps03",
		"ps04",
		"ps05",
		"ps06",
		"ps07",
		"ps08",
	]

	constructor(private gameService: GameService) { }
	listNewGames: Game[] = [];
	listPreSale: Game[] = [];
	listDemos: Game[] = [];
	ngOnInit(): void {
		this.getListPreSaleValue();
		this.getListDemosValue();
		this.getListNewGamesValue();
	}

	getListNewGamesValue(): void {
		this.gameService.getListNewGames().subscribe({
			next: data => {
				this.listNewGames = data;
			},
			error: error => {
				console.error('There was an error!', error);
			}
		})
	}
	getListPreSaleValue(): void {
		this.gameService.getListPreSale().subscribe({
			next: data => {
				this.listPreSale = data;
			},
			error: error => {
				console.error('There was an error!', error);
			}
		})
	}
	getListDemosValue(): void {
		this.gameService.getListDemos().subscribe({
			next: data => {
				this.listDemos = data;
			},
			error: error => {
				console.error('There was an error!', error);
			}
		})
	}
}
