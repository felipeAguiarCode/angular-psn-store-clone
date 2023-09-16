import { Component, Input, OnInit } from '@angular/core';

import { GameService } from 'src/app/services/game.service';

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
	this.setValuesToComponent(this.id);
  }
	setValuesToComponent(id: string) {
		const result = this.gameService.getDataById(id);

		if (result) {
			this.gameCover = result.gameCover;
			this.gameLabel = result.gameLabel;
			this.gameType = result.gameType;
			this.gamePrice = result.gamePrice
		  } else {
			console.error(`Artigo com ID ${id} não encontrado.`);
		  }
	}

}
