import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-curriculum-highlights',
  templateUrl: './curriculum-highlights.component.html',
  styleUrls: ['./curriculum-highlights.component.css']
})
export class CurriculumHighlightsComponent implements OnInit, OnDestroy {
  slides = [
    { img: 'assets/img/curriculum/highlights8.jpg', alt: 'Building An End-to-End Custom LLM Application' },
    { img: 'assets/img/curriculum/highlights9.jpg', alt: 'Generative AI and LLM Fundamentals' },
    { img: 'assets/img/curriculum/highlights1.jpg', alt: 'Gen AI in Software Applications' },
    { img: 'assets/img/curriculum/highlights2.jpg', alt: 'Embeddings and Vector Databases' },
    { img: 'assets/img/curriculum/highlights3.jpg', alt: 'Prompt Engineering' },
    { img: 'assets/img/curriculum/highlights4.jpg', alt: 'LangChain' },
    { img: 'assets/img/curriculum/highlights5.jpg', alt: 'Deployment of LLM Applications' },
    { img: 'assets/img/curriculum/highlights6.jpg', alt: 'RAG' },
    { img: 'assets/img/curriculum/highlights7.jpg', alt: 'LLM Agents' }
  ];

  selectedIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  nextSlide(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.selectedIndex = (this.selectedIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.selectedIndex = index;
  }
}
