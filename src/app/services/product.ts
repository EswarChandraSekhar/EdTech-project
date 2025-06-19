import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {
  productList: any[] =   [
    {
      title: 'Fresh Tomatoes',
      image: '/tomato.jpg',
      category: 'Vegetables',
      price: '₹40 / kg',
      rating: 3.5,
      ratingText: '(3.5)'
    },
    {
      title: 'Organic Milk',
      image: '/organic_milk.jpg',
      category: 'Dairy',
      price: '₹60 / litre',
      rating: 4.0,
      ratingText: '(4.0)'
    },
    {
      title: 'Bananas',
      image: '/bananas.jpg',
      category: 'Fruits',
      price: '₹25 / dozen',
      rating: 3.5,
      ratingText: '(3.5)'
    },
    {
      title: 'Potatoes',
      image: '/potatos.jpg',
      category: 'Vegetables',
      price: '₹30 / kg',
      rating: 3.0,
      ratingText: '(3.0)'
    },
    {
      title: 'Farm Eggs',
      image: '/form_eggs.jpg',
      category: 'Dairy',
      price: '₹60 / 12 pcs',
      rating: 4.5,
      ratingText: '(4.5)'
    },
    {
      title: 'Whole Wheat Bread',
      image: '/whole_wheat_bread.jpg',
      category: 'Bakery',
      price: '₹35 / loaf',
      rating: 3.0,
      ratingText: '(3.0)'
    }
  ];
  constructor() { }

  addProduct(product:any){
    this.productList.push(product)
  }
  getProductList(){
    return [...this.productList];
  }
}
