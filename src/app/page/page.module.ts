import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';

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
    NgCircleProgressModule.forRoot({
      "backgroundOpacity": 1,
      "backgroundStrokeWidth": 16,
      "backgroundPadding": 7,
      "radius": 120,
      "space": -2,
      "unitsFontWeight": "500",
      "outerStrokeGradient": false,
      "outerStrokeWidth": 2,
      "outerStrokeColor": "#00afaa",
      "outerStrokeGradientStopColor": "#006b68",
      "innerStrokeColor": "#4ca585",
      "innerStrokeWidth": 2,
      "title": [
                "working",
                "in",
                "progress"
      ],
      "subtitle":"100",
      "titleColor": "#00afaa",
      "titleFontSize": "45",
      "subtitleColor": "#00afaa",
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
