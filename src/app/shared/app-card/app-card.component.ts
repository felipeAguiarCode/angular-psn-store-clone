import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './app-card.component.html',
	styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {
	@Input()
	gameCover: string = ""
	@Input()
	gameLabel: string = ""
	@Input()
	gameType: string = "XPTO | PS4"
	@Input()
	gamePrice: string = "R$ 399,90"
	constructor() { }

	ngOnInit(): void {
	}

}
