import { Component, Input } from '@angular/core';

var supti:number = 1;

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent {
  @Input() type = "mod";
  suptitle:number = supti++;
  title = "Panorama de SSI";
  time = "04:02:38";
  score = "100";
  img = "assets/Module1.png";
}
