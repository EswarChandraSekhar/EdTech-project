import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  productForm: boolean = false;

  productName: string = ''
  productCategory: string = ''
  productPrice: string = ''
  productRating: any = null;
  productImage: string = ''

  searchInput: string = ''

 productList: any[] = []

  constructor(public productService: Product){

  }

  ngOnInit(): void {
   this.productList =  this.productService.getProductList()
  }
 

  handleAddProduct(){
    this.productForm = true;
  }
  handleBackButton(){
    this.productForm = false;
  }
  handleSubmit(){
    if(this.productName === '' || this.productCategory === ''
    || this.productPrice === '' || this.productRating === null ||
    this.productImage === ''){
      alert('All fields are mandatory!')
      return;
    }

    let product = {
      title: this.productName,
      category: this.productCategory,
      image: this.productImage,
      price: this.productPrice,
      rating: this.productRating,
      ratingText: this.productRating+''
    }
    this.productService.addProduct(product)
    this.productList.push(product)
   

    this.productName = ''
    this.productCategory = ''
    this.productImage = ''
    this.productPrice = ''
    this.productRating = null;
    
    this.productForm = false;
  }
  
}
