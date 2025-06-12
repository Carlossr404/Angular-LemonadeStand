import { Component } from '@angular/core';
import { Product } from "../product/product";

@Component({
  selector: 'app-card',
  imports: [Product],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  clicked() {
    console.log("clicked")
  }
}
