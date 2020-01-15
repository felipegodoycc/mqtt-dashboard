import { Component, OnInit, Input } from '@angular/core';
import { DataLineChart } from './interface/data.interface';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() data: DataLineChart;

  constructor() { }

  ngOnInit() {
  }

}
