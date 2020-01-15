import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

export class DataLineChart {
    lineChartData: ChartDataSets[];
    lineChartLabels: Label[];
    lineChartOptions: Object;
    lineChartsColors: Color[];
    lineChartLegend: boolean;
    lineChartPlugins: any[];
    lineChartType: string;

    constructor(_lineChartData,
                _lineChartLabels,
                _lineChartsColors,
                _lineChartPlugins=[],
                _lineChartOptions = { responsive: true },                
                _lineChartLegend = true,                
                _lineChartType = 'line'){
                    this.lineChartData = _lineChartData;
                    this.lineChartLabels = _lineChartLabels;
                    this.lineChartsColors = _lineChartsColors;
                    this.lineChartOptions = _lineChartOptions;
                    this.lineChartLegend = _lineChartLegend;
                    this.lineChartPlugins = _lineChartPlugins;
                    this.lineChartType = _lineChartType;
                }
}