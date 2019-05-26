import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  graficos: any = {
    'crediflash': {
      'labels': ['A tiempo', 'Mora', '50USD', '100USD', '500USD'],
      'data':  [
        { data: [65, 59, 90, 81, 56], label: 'Series A' },
        { data: [28, 48, 40, 19, 96], label: 'Series B' }],
      'type': 'radar',
      'leyenda': 'Tipo de crédito'
    },
    'ordinario': {
      'labels': ['Con encaje', 'Sin encaje'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Crédito ordinario'
    },
    'colectivo': {
      'labels': ['Estudiantil', 'Particular'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': 'Crédito colectivo'
    },
    'credipoliza': {
      'labels': ['Mayor a un año', 'Menor a un año'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': 'Credipóliza'
    },
  };
 
  

  constructor() { }

  ngOnInit() {
  }

    
}

