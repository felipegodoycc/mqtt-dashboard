import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-medidor',
  templateUrl: './medidor.component.html',
  styleUrls: ['./medidor.component.css']
})
export class MedidorComponent implements OnInit {
  @Input() gaugeType = "arch";
  @Input() gaugeValue = 28.3;
  @Input() gaugeLabel = "";
  @Input() gaugeAppendText = "km/hr";
  @Input() minValue = 0;
  @Input() maxValue = 100;
  @Input() thickValue = 10;
  @Input() color = "rgba(63, 81, 181, 1)"
  @Input() backColor = "rgba(0, 0, 0, 0.1)"

  constructor() { }

  ngOnInit() {
  }

}
