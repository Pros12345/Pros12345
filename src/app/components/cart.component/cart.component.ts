import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define the structure of a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  discount: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalItemPrice: number = 0;
  totalDiscount: number = 0;
  totalAmount: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Mock data for the cart. In a real app, this would come from a service or state management.
    this.cartItems = [
      { id: 1, name: 'Google Pixel 8', price: 65999, quantity: 1, discount: 5000, image: 'https://www.designinfo.in/wp-content/uploads/2024/03/google-pixel-8-128gb-hazel-1-485x485-optimized.webp' },
      { id: 2, name: 'Apple iPhone 14', price: 58999, quantity: 1, discount: 7000, image: 'https://m.media-amazon.com/images/I/31wacBawB3L._SX300_SY300_QL70_FMwebp_.jpg' },
      { id: 3, name: 'Samsung Galaxy S22', price: 150990, quantity: 2, discount: 2000, image: 'https://www.designinfo.in/wp-content/uploads/2023/08/SAMSUNG-Galaxy-S22-Ultra-5G-12GB-RAM-512GB-Green-7-485x485-optimized.webp' }
    ];
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.totalItemPrice = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    this.totalDiscount = this.cartItems.reduce((sum, item) => sum + (item.discount * item.quantity), 0);
    this.totalAmount = this.totalItemPrice - this.totalDiscount;
  }

  incrementQuantity(item: CartItem): void {
    item.quantity++;
    this.calculateTotals();
  }

  decrementQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotals();
    }
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
    this.calculateTotals();
  }
}