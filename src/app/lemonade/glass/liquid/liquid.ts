import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-liquid',
  imports: [],
  templateUrl: './liquid.html',
  styleUrl: './liquid.css'
})
export class Liquid {
  @Input() percentLemonJuiceLiquid: number = 0
  @Input() percentWaterLiquid: number = 0
  @Input() percentSugarLiquid: number = 0
  @Input() percentIceLiquid: number = 0

}
