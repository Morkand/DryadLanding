import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HighchartsChartModule } from 'highcharts-angular';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    HighchartsChartModule,
    NgCircleProgressModule.forRoot({
      "backgroundOpacity": 0.6,
      "backgroundStrokeWidth": 16,
      "backgroundPadding": 7,
      "radius": 130,
      "space": -1,
      "unitsFontWeight": "500",
      "outerStrokeGradient": false,
      "outerStrokeWidth": 3,
      "outerStrokeColor": "#00afaa",
      "outerStrokeGradientStopColor": "#006b68",
      "innerStrokeColor": "#4ca585",
      "innerStrokeWidth": 3,
      "title": [
                "working",
                "in",
                "progress"
      ],
      "subtitle":"100",
      "titleColor": "rgba(76,165,133,1)",
      "titleFontSize": "45",
      "subtitleColor": "rgba(76,165,133,1)",
      "subtitleFontSize": "24",
      "subtitleFontWeight": "600",
      "animationDuration": 1000,
      "showSubtitle":true,
      "showUnits": false,
      "clockwise": false})

  ],
  exports:[
    RouterModule
  ]
})
export class PageModule { }
