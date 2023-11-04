import { Component, OnInit } from '@angular/core';
import { DataAPiService } from '../data-api.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
 Card:any;
  constructor (private Api :DataAPiService) {}

  ngOnInit(): void {
    this.Api.getApi().subscribe((data) =>{
      this.Card = data?.top_cards
      console.log(data?.top_cards)
    })
  }
}
