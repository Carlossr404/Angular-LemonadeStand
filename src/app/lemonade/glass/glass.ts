import { Component, Input } from '@angular/core';
import { Liquid } from "./liquid/liquid";

@Component({
  selector: 'app-glass',
  imports: [Liquid],
  templateUrl: './glass.html',
  styleUrl: './glass.css'
})
export class Glass {

  @Input() percentLemonJuice: number = 0
  @Input() percentWater: number = 0
  @Input() percentSugar: number = 0
  @Input() percentIce: number = 0

}
