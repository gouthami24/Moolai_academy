import { Component } from '@angular/core';

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
    // Add more slides as needed
  ];
}

