import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.html',   // ✅ correct filename
  styleUrls: ['./slider.css']    // ✅ correct key + filename
})
export class SliderComponent implements AfterViewInit {
  slides!: HTMLElement;
  dotsContainer!: HTMLElement;
  dots!: HTMLCollection;
  totalSlides!: number;
  index: number = 0;
  interval: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.slides = this.el.nativeElement.querySelector('#slides');
    this.dotsContainer = this.el.nativeElement.querySelector('#dots');
    this.totalSlides = this.slides.children.length;

    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement('span');
      dot.addEventListener('click', () => this.goToSlide(i));
      if (i === 0) dot.classList.add('active');
      this.dotsContainer.appendChild(dot);
    }

    this.dots = this.dotsContainer.children;

    this.interval = setInterval(() => this.nextSlide(), 2000);
  }

  showSlide(i: number) {
    this.index = (i + this.totalSlides) % this.totalSlides;
    this.slides.style.transform = `translateX(${-this.index * 100}%)`;

    for (let d of Array.from(this.dots)) {
      d.classList.remove('active');
    }
    this.dots[this.index].classList.add('active');
  }

  nextSlide() {
    this.showSlide(this.index + 1);
  }

  prevSlide() {
    this.showSlide(this.index - 1);
  }

  goToSlide(i: number) {
    this.showSlide(i);
  }
}
