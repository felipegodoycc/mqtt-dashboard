import { ChartDataSets, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

export class DataLineChart {
    lineChartData: ChartDataSets[];
    lineChartLabels: Label[];
    lineChartOptions: Object;
    lineChartsColors: Color[];
    lineChartLegend: boolean;
    lineChartPlugins: any[];
    lineChartType: ChartType;

    constructor(_lineChartData = [{ data: [1,2,4,5], label: ''}],
                _lineChartLabels = [],
                _lineChartsColors = [],
                _lineChartPlugins=[],
                _lineChartOptions = { responsive: true },
                _lineChartLegend = true,
                _lineChartType = 'line' as ChartType) {
                    this.lineChartData = _lineChartData;
                    this.lineChartLabels = _lineChartLabels;
                    this.lineChartsColors = _lineChartsColors;
                    this.lineChartOptions = _lineChartOptions;
                    this.lineChartLegend = _lineChartLegend;
                    this.lineChartPlugins = _lineChartPlugins;
                    this.lineChartType = _lineChartType;
                }
}
