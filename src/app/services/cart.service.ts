import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  constructor() { }

  addToCart() {
    this.cartCount.next(this.cartCount.value + 1);
  }

  getCartCount() {
    return this.cartCount.value;
  }
}
