import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

	@Input()
	gameType:string ="Digital PS4"
	@Input()
	gamePrice:string = "R$ 399,90"
  constructor() { }

  ngOnInit(): void {
  }

}
