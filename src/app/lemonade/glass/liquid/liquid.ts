import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Wave } from "./wave/wave";

@Component({
  selector: 'app-liquid',
  imports: [Wave, CommonModule],
  templateUrl: './liquid.html',
  styleUrl: './liquid.css'
})
export class Liquid {
  @Input() percentLemonJuiceLiquid: number = 0
  @Input() percentWaterLiquid: number = 0
  @Input() percentSugarLiquid: number = 0
  @Input() numberOfIceCubes: number = 0

}
