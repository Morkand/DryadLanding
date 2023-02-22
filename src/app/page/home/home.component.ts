import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('writerTitle1')
  writerTitle1:ElementRef = {} as ElementRef;
  @ViewChild('writerTitle2')
  writerTitle2:ElementRef = {} as ElementRef;
  public countdown = {D:0,H:0,M:0,S:0};
  private deadline:number = Date.parse('2023-02-25');
  ngAfterViewInit(): void {
    this.Animation(this.writerTitle1,this.writerTitle1.nativeElement.innerHTML);
    this.InitAnimation(this.writerTitle1);
    this.Animation(this.writerTitle2,this.writerTitle2.nativeElement.innerHTML,100);
    this.InitAnimation(this.writerTitle2);
    this.initTimeCountDown();
    
  }
  private InitAnimation(writer:ElementRef) {
    writer.nativeElement.innerHTML = '';

  }
  private Animation(writer:ElementRef,text:string,speed: number = 200, i: number = -1): void {
    let titleText:string= text;
    if (i < titleText.length) {
      writer.nativeElement.innerHTML = writer.nativeElement.innerHTML.replace('<span style="animation: flash;animation-duration: 2s;animation-iteration-count: infinite;">|</span>', '');
      writer.nativeElement.innerHTML += titleText.charAt(i) + '<span style="animation: flash;animation-duration: 2s;animation-iteration-count: infinite;">|</span>';
      i++;
      setTimeout(()=>this.Animation(writer,titleText,speed,i), speed);
    }
  }

  private initTimeCountDown(){
    setInterval(()=>this.Countdown(),1000);
  }
  private Countdown() {
  
    let t = this.deadline - Date.now();
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    this.countdown = {D:days,H:hours,M:minutes,S:seconds};
    console.log(this.countdown);
  }
 }
