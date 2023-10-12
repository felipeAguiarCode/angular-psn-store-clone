import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../data/dataFake';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input()
	gameCover:string = ""
	@Input()
	gameLabel:string=""
	@Input()
	gameType:string =""
	@Input()
	gamePrice:string = ""
	@Input()
	id:string = ""

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
		const response = this.gameService.getGameById(id)
		if (!response) return

		this.gameCover = response.gameCover
		this.gameLabel = response.gameLabel
		this.gameType = response.gameType
		this.gamePrice = response.gamePrice
  }
}
