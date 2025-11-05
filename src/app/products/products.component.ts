import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
   products = [
    {
      id: 1,
      name: 'Laptop',
      description: 'High-performance laptop',
      price: 999.99,
      inStock: true,
      image: 'https://via.placeholder.com/300x200?text=Laptop'
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'Latest smartphone model',
      price: 699.99,
      inStock: true,
      image: 'https://via.placeholder.com/300x200?text=Phone'
    },
    {
      id: 3,
      name: 'Tablet',
      description: 'Portable tablet device',
      price: 399.99,
      inStock: false,
      image: 'https://via.placeholder.com/300x200?text=Tablet'
    },
    {
      id: 4,
      name: 'Headphones',
      description: 'Wireless noise-canceling headphones',
      price: 199.99,
      inStock: true,
      image: 'https://via.placeholder.com/300x200?text=Headphones'
    }
  ];
}
