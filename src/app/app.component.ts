import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-converter';
}

// fetch("https://cdn.cur.su/api/latest.json")
//     .then(response => response.json())
//     .then(rates => {
//         const kurs = rates.rates
//         const uah = +kurs.UAH
//         const eur = +kurs.EUR
//         console.log(uah/eur)
        
//         // console.log(Number(rates.UAH)/Number(rates.EUR))

//     })
//     .catch(error => console.log(error))