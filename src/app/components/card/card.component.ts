import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input()
	gameThumb:string = ""
	@Input()
	gamePlatform:string=""
	@Input()
	gameTitle:string ="XPTO | PS4"
	@Input()
	gameGenre:string = "R$ 399,90"
	@Input()
	gameId:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
