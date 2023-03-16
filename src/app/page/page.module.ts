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
      "backgroundStrokeWidth": 5,
      "backgroundPadding": 2,
      "radius": 130,
      "space": 2,
      "unitsFontWeight": "500",
      "outerStrokeGradient": false,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "rgb(182,206,209)",
      "outerStrokeGradientStopColor": "#006b68",
      "innerStrokeColor": "rgb(0,175,170)",
      "innerStrokeWidth": 2,
      "title": [
                "working",
                "in",
                "progress"
      ],
      "subtitle":"100",
      "titleColor": "rgba(76,165,133,1)",
      "titleFontSize": "65",
      "subtitleColor": "rgba(76,165,133,1)",
      "subtitleFontSize": "65",
      "subtitleFontWeight": "1000",
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
