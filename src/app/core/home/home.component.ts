import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
declare function title(): any;
declare function dashboard(): any;
declare function logo(): any;
declare function slide(): any;
declare function carde(): any;
declare function cardes(): any;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit, OnDestroy,OnInit {
  ngOnInit(): void {
    window.scrollTo({top:0,behavior:'smooth'})
        this.addClickListeners();
  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }


  }
  ngAfterViewInit(): void {
    title();
    dashboard();
    logo();
    slide();
    carde();
    cardes();
    this.change();
    this.intervalId = setInterval(() => {
      this.change();
    }, 5000);
  }
  private intervalId: any;
  public currentindex = 0;
  private activeimage: string[] = [
    'assets/images/about-1.png',
    'assets/images/about-2.png',
    'assets/images/about-3.png',
    'assets/images/about-4.png',
  ];
private change(): void {
  const aboutItems = document.querySelectorAll('.about');
  const rightImage = document.getElementById('right_image') as HTMLImageElement;

  aboutItems.forEach((item) => item.classList.remove('active'));

  if (aboutItems[this.currentindex]) {
    aboutItems[this.currentindex].classList.add('active');
  }

  if (rightImage) {
    rightImage.src = this.activeimage[this.currentindex];
  }

  this.currentindex = (this.currentindex + 1) % aboutItems.length;
}

private addClickListeners(): void {
  const aboutItems = document.querySelectorAll('.about');
  const rightImage = document.getElementById('right_image') as HTMLImageElement;

  aboutItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      aboutItems.forEach((el) => el.classList.remove('active'));

      item.classList.add('active');

      if (rightImage) {
        rightImage.src = this.activeimage[index];
      }

      this.currentindex = (index + 1) % aboutItems.length;
    });
  });
}
}
