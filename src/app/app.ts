import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lemonade } from "./lemonade/lemonade";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Lemonade],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'lemonade-stand';
}
