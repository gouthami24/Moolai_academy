import { Component, OnInit, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.css']
})
export class CustomCarouselComponent {
  slides = [
    {
      img: '/assets/img/hands-on-projects.webp',
      title: 'Hands-On Projects',
      description: 'Practical projects for real-world application of knowledge.'
    },
    {
      img: '/assets/img/certification.webp',
      title: 'Certification',
      description: 'Earn a certificate to showcase your Generative AI proficiency.'
    },
    {
      img: '/assets/img/deployable-ai-applications.webp',
      title: 'Deployable AI Applications',
      description: 'Graduate with a deployable LLM application in Streamlit or Hugging Face cloud.'
    },
    {
      img: '/assets/img/in-person-teaching.webp',
      title: 'In-Person Teaching',
      description: 'face to face collaborative instruction with direct interaction.'
    },
    {
      img: '/assets/img/immediate-feedback.webp',
      title: 'Immediate Feedback',
      description: 'Timely, actionable feedback for continuous skill refinement.'
    },
    {
      img: '/assets/img/small-class-size.webp',
      title: 'Small Class Sizes',
      description: 'Personalized attention and strong community in limited-size classes.'
    },
    // Add more slides as needed
  ];

  selectedIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.selectedIndex = (this.selectedIndex + 1) % this.slides.length;
    }, 8000); // Change slide every 3 seconds
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

