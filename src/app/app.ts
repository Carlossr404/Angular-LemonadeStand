import { Component } from '@angular/core';
import { Lemonade } from "./lemonade/lemonade";

@Component({
  selector: 'app-root',
  imports: [Lemonade],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'lemonade-stand';
}
