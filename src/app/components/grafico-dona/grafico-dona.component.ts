import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType, RadialChartOptions, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: Label[] = [];
  @Input('chartData') doughnutChartData: MultiDataSet[] = [];
  @Input('chartType') doughnutChartType: string = '';



/* // Radar
public radarChartOptions: RadialChartOptions = {
  responsive: true,
};
public radarChartLabels: Label[] = ['HASTA 50USD', '100USD', '200USD', '300USD', '400USD', '500USD', '>500USD'];

public radarChartData: ChartDataSets [] = [
  { data: [1, 5, 1, 1, 1, 1, 1], label: 'Con atraso' },
  { data: [10, 5, 2, 1, 3, 1, 1], label: 'A tiempo' }
];
public radarChartType: ChartType = 'radar';

 */

  

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
