//Rutas
import { PAGES_ROUTES } from "./pages.routes";

//Módulos
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

//Páginas
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";

//Componentes
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { GraficoDonaComponent } from "../components/grafico-dona/grafico-dona.component";


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
         //temporal
         IncrementadorComponent,
         GraficoDonaComponent,
    ], 
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,

    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
       
    ]
})

export class PagesModule {}