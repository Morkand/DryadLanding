import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('writerTitle1')
  writerTitle1: ElementRef = {} as ElementRef;
  @ViewChild('writerTitle2')
  writerTitle2: ElementRef = {} as ElementRef;
  public countdown = { D: 0, H: 0, M: 0, S: 0 };
  public showTeamInfo:string[] = ['none','none','none','none','none'];
  private deadline: number = Date.parse('2023-03-25');
  HighchartsTokenDistribution: any = Highcharts;
  pieTokenDistribution1: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    }
    ,
    title: {
      text: 'Token Distribution',
      align: 'center',
      style: {
        fontFamily: 'Akzidenz',
        fontSize: '2vw'
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    legend: {
      layout: 'vetical',
    },
    navigation: {
      animation: true,
    },
    colors:['#006B68','#4CA585','#00AFAA','#B6CED0','#19322F','#FFD600'],
    series: [
      {
        name: 'Brands',
        colorByPoint: true,
        
        data: [
          {
            name: 'Airdrop',
            y: 1,
            
          
          },
          {
            name: 'Phase 1 ICO',
            y: 10,
          },
          {
            name: 'Phase 2 ICO',
            y: 20,
          },
          {
            name: 'DRYAD Official Launch',
            y: 30,
            sliced: true,
            selected: true,
          },
          {
            name: 'Founders',
            y: 9,
          },
          {
            name: 'Backup',
            y: 30
          },
        ]
      },
    ],
  };
  pieTokenDistribution2: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    }
    ,
    title: {
      text: 'Funds Distribution',
      align: 'center',
      style: {
        fontFamily: 'Akzidenz',
        fontSize: '2vw'
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    legend: {
      layout: 'vetical',
    },
    navigation: {
      animation: true,
    },
    colors:['#006B68','#4CA585','#00AFAA','#B6CED0','#19322F','#FFD600'],
    series: [
      {
        name: 'Brands',
        colorByPoint: true,
        data: [
          {
            name: 'Project Investment ',
            y: 40,
            sliced: true,
            selected: true,
          },
          {
            name: 'Founders',
            y: 20,
          },
          {
            name: 'Development Team',
            y:10,
          },
          {
            name: 'Backup',
            y: 10,
          },
          {
            name: 'Consultants',
            y: 5,
          },
          {
            name: 'Liquidity Injection',
            y: 15,
          },
        ]
      },
    ],
  };

  ngAfterViewInit(): void {
    this.Animation(
      this.writerTitle1,
      this.writerTitle1.nativeElement.innerHTML
    );
    this.InitAnimation(this.writerTitle1);
    this.Animation(
      this.writerTitle2,
      this.writerTitle2.nativeElement.innerHTML,
      100
    );
    this.InitAnimation(this.writerTitle2);
    this.initTimeCountDown();
    let credits = <HTMLElement>(
      document.getElementsByClassName('highcharts-credits')[0]
    );
    credits.style.display = 'none';
    credits = <HTMLElement>(
      document.getElementsByClassName('highcharts-credits')[1]
    );
    credits.style.display = 'none';
  }
  private InitAnimation(writer: ElementRef) {
    writer.nativeElement.innerHTML = '';
  }
  private Animation(
    writer: ElementRef,
    text: string,
    speed: number = 200,
    i: number = -1
  ): void {
    let titleText: string = text;
    if (i < titleText.length) {
      writer.nativeElement.innerHTML = writer.nativeElement.innerHTML.replace(
        '<span style="font-size: 2.8vw;animation: flash;animation-duration: 2s;animation-iteration-count: infinite;">|</span>',
        ''
      );
      writer.nativeElement.innerHTML +=
        titleText.charAt(i) +
        '<span style="font-size: 2.8vw;animation: flash;animation-duration: 2s;animation-iteration-count: infinite;">|</span>';
      i++;
      setTimeout(() => this.Animation(writer, titleText, speed, i), speed);
    }
  }

  private initTimeCountDown() {
    setInterval(() => this.Countdown(), 1000);
  }
  private Countdown() {
    let t = this.deadline - Date.now();
    if (t >= 0) {
      let seconds = Math.floor((t / 1000) % 60);
      let minutes = Math.floor((t / 1000 / 60) % 60);
      let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      let days = Math.floor(t / (1000 * 60 * 60 * 24));

      this.countdown = { D: days, H: hours, M: minutes, S: seconds };
    }
  }

}