import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: false,
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews {
  addReviewForm: boolean = false;
  addReviewButtonClick(){
    this.addReviewForm = true;
  }
  handleBackClick(){
    this.addReviewForm = false;
  }
}
