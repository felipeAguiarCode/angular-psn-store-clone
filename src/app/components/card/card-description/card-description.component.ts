import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-description',
	templateUrl: './card-description.component.html',
	styleUrls: ['./card-description.component.css']
})
export class CardDescriptionComponent implements OnInit {
	@Input()
	gameTitle: string = ""
	@Input()
	gameType: string = ""
	constructor() { }

	ngOnInit(): void {
	}

}
