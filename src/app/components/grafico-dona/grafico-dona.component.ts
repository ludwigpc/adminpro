import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType, RadialChartOptions, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

/*   @Input('chartLabels') doughnutChartLabels: Label[] = [];
  @Input('chartData') doughnutChartData: MultiDataSet[] = [];
  @Input('chartType') doughnutChartType: string = '';
 */


// Radar

@Input('chartOptions') radarChartOptions: RadialChartOptions = { responsive: true,};

@Input('chartLabels') radarChartLabels: Label[] = [];
@Input('chartData') radarChartData: ChartDataSets [] = [];
@Input('chartType') radarChartType: ChartType = 'radar';



  

  constructor() { }

  ngOnInit() {
  }

// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}


}
