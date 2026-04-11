import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

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
	gameType:string ="XPTO | PS4"
	@Input()
	gamePrice:string = "R$ 399,90"

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  buyGame(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.addToCart();
  }

}
