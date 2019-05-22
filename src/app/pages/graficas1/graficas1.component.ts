import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  graficos: any = {
    'crediflash': {
      'labels': ['Semanal', 'Quincenal', 'Mensual'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'Crediflash'
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

