import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: false,
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews {
  count: number = 0;
  addReviewForm: boolean = false;

  name: string = '';
  title: string = '';
  feedback: string = '';

  addReviewButtonClick(){
    this.addReviewForm = true;
  }
  handleBackClick(){
    this.addReviewForm = false;
  }
  increamentCount(){
    this.count = this.count+1;
  }
  decreamentCount(){
    this.count = this.count -1;
  }
  handleSubmit(){
    if(this.name === '' || this.title === '' || this.feedback === ''){
      alert('Must Enter All Fields!')
      return;
    }
    console.log("Name: ",this.name)
    console.log("Title: ",this.title)
    console.log("Feedback: ",this.feedback)

    this.name = ''
    this.title = ''
    this.feedback = ''
  }





  handleTitle(event:any){
    this.title = event.target.value;
  }
  printName(){
    console.log(this.name)
  }

}
