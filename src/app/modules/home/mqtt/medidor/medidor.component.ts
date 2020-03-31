import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-medidor',
  templateUrl: './medidor.component.html',
  styleUrls: ['./medidor.component.css']
})
export class MedidorComponent implements OnInit {
  @Input() gaugeType = "semi";
  @Input() gaugeValue = 28.3;
  @Input() gaugeLabel = "";
  @Input() gaugeAppendText = "km/hr";
  @Input() minValue = 0;
  @Input() maxValue = 100;
  @Input() thickValue = 10;

  constructor() { }

  ngOnInit() {
  }

}
