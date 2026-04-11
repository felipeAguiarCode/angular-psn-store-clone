import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  cartCount$: Observable<number>;

  constructor(private cartService: CartService) {
    this.cartCount$ = this.cartService.cartCount$;
  }

  ngOnInit(): void {
  }

}
