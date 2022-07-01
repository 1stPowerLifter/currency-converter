import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  title = "КОНВЕРТЕР ВАЛЮТ"
  currency: string[] = []
  values: number[] = []
  
  leftInt: number = 0
  leftCur: string =""
  rightInt: number = 0
  rightCur:string = ""

  kurs = fetch("https://cdn.cur.su/api/latest.json")
        .then(response => response.json())
        .then(rates => {
          const kurs = rates.rates  
          this.currency = Object.keys(kurs)
          this.values = Object.values(kurs)
        })
    .catch(error => console.log(error))
  
  

  evtLeftInt(e: any):void{
    this.leftInt = e.target.value
    this.formValidLeft()
  }
  evtLeftCur(e: any):void{
    this.leftCur = e.target.value
    this.formValidRight()
    this.formValidLeft()
  }
  evtRightInt(e: any):void{
    this.rightInt = e.target.value
    this.formValidRight()
  }
  evtRightCur(e: any):void{
    this.rightCur = e.target.value
    this.formValidRight()
    this.formValidLeft()
  }

  formValidLeft(): void{
    if (this.leftCur && this.rightCur) {
      const index = this.currency.indexOf(this.rightCur)
      const mult = this.leftInt * this.values[index]
      this.rightInt = +mult.toFixed(2)
    }
  }

  formValidRight() {
    if (this.leftCur && this.rightCur) {
      const index = this.currency.indexOf(this.leftCur)
      const mult =  this.rightInt * this.values[index]
        this.leftInt = +mult.toFixed(2)
    }
  }


  ngOnInit(): void { 
  }
  
}
