import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-menu-bar',
	templateUrl: './app-menu-bar.component.html',
	styleUrls: ['./app-menu-bar.component.css']
})
export class AppMenuBarComponent implements OnInit {

	@Input() gameCover: string = "";
	@Input() gameLabel: string = "";
	@Input() gameType: string = "";
	@Input() gamePrice: string = "";


	constructor() { }

	ngOnInit(): void { }


}
