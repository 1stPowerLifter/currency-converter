import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  usdHeader: number =0
  eurHeader: number =0
  
  kurs = fetch("https://cdn.cur.su/api/latest.json")
        .then(response => response.json())
        .then(rates => {
          const kurs = rates.rates
          const uah = +kurs.UAH
          const eur = +kurs.EUR 
          this.usdHeader = +uah.toFixed(2)
          this.eurHeader = +(uah/eur).toFixed(2)
          
        })
        .catch(error => console.log(error))

  ngOnInit(): void {
  }

}
