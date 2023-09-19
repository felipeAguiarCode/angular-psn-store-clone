import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

	@Input()
	gameTitle:string ="Digital PS4"
	@Input()
	gameGenre:string = "R$ 399,90"
  constructor() { }

  ngOnInit(): void {
  }

}
