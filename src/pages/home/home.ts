import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  secretNumbers = [];
  numberToGet: number = null;
  totalNumber : number= 0;
  totalScore : number = 0;
  best : number = 0;
  time : number =0;

  constructor(public navCtrl: NavController) {
    this.generateNumbers();
    this.numberToGet = Math.floor(Math.random()*100) + 1;
    setInterval(()=>{
      return this.time += 1;
    }, 1000);
  }

  generateNumbers() {
    for(let i=0;i<30;i++){
      this.secretNumbers.push(Math.floor(Math.random() * 50) + 1);
    }
    console.log(this.secretNumbers);
  }

  onNumberClick(item) {
    this.totalNumber += item;
    console.log("You clicked ", item, this.totalNumber);
    if(this.totalNumber === this.numberToGet){
      alert("You won");
      this.resetScoreBoard();
      this.totalScore += 1;
    } else if(this.totalNumber >= this.numberToGet){
      alert("You Lose");
      this.resetScoreBoard();
      this.totalScore -= 1;
    }
  }
  resetScoreBoard() {
      let temp = this.time;
      this.best = Math.min(temp, this.best);  
      this.numberToGet = Math.floor(Math.random()*100) + 1;
      // this.totalScore += 1;
      this.totalNumber = 0;
      this.secretNumbers = [];
      this.generateNumbers();
      this.best = 0;
      this.time = 0;
  }
}
