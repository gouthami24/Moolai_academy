import { Component } from '@angular/core';

@Component({
  selector: 'app-course-syllabus',
  templateUrl: './course-syllabus.component.html',
  styleUrls: ['./course-syllabus.component.css']
})
export class CourseSyllabusComponent {
  selectedIndex = 0;
  syllabusItems = [
    {
      img: 'assets/img/syllabus/syllabus1.webp',
      alt: 'Emerging Architectures for Large Language Model Applications',
      text: 'Emerging Architectures for Large Language Model Applications'
    },
    {
      img: 'assets/img/syllabus/syllabus2.webp',
      alt: 'Evolution of Embeddings - The Building Blocks of Large Language Models',
      text: 'Evolution of Embeddings - The Building Blocks of Large Language Models'
    },
    {
      img: 'assets/img/syllabus/syllabus3.webp',
      alt: 'Attention Mechanism and Transformers',
      text: 'Attention Mechanism and Transformers'
    },
    {
      img: 'assets/img/syllabus/syllabus4.webp',
      alt: 'Efficient Storage and Retrieval of Vector Embeddings Using Vector Databases',
      text: 'Efficient Storage and Retrieval of Vector Embeddings Using Vector Databases'
    },
    {
      img: 'assets/img/syllabus/syllabus5.webp',
      alt: 'Leveraging Text Embeddings for Semantic Search',
      text: 'Leveraging Text Embeddings for Semantic Search'
    },
    {
      img: 'assets/img/syllabus/syllabus6.webp',
      alt: 'Fundamentals of Prompt Engineering',
      text: 'Fundamentals of Prompt Engineering'
    },
    {
      img: 'assets/img/syllabus/syllabus7.webp',
      alt: 'Fine Tuning Foundation LLMs',
      text: 'Fine Tuning Foundation LLMs'
    },
    {
      img: 'assets/img/syllabus/syllabus8.webp',
      alt: 'Orchestration Frameworks to Build Applications on Enterprise Data',
      text: 'Orchestration Frameworks to Build Applications on Enterprise Data'
    },
    {
      img: 'assets/img/syllabus/syllabus9.webp',
      alt: 'LangChain for LLM Application Development',
      text: 'LangChain for LLM Application Development'
    },
    {
      img: 'assets/img/syllabus/syllabus10.webp',
      alt: 'Autonomous Agents: Delegating Decision Making to AI',
      text: 'Autonomous Agents: Delegating Decision Making to AI'
    },
    {
      img: 'assets/img/syllabus/syllabus11.webp',
      alt: 'LLMOps : Observability & Evaluation',
      text: 'LLMOps : Observability & Evaluation'
    },
    {
      img: 'assets/img/syllabus/syllabus12.webp',
      alt: 'Evaluating Large Language Models (LLMs)',
      text: 'Evaluating Large Language Models (LLMs)'
    },
    {
      img: 'assets/img/syllabus/syllabus13.webp',
      alt: 'Productionize your LLM application',
      text: 'Productionize your LLM application'
    },
    // Add more items as needed
  ];

  nextSlide(): void {
    if (this.selectedIndex < this.syllabusItems.length - 1) {
      this.selectedIndex++;
    } else {
      this.selectedIndex = 0;
    }
  }

  prevSlide(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    } else {
      this.selectedIndex = this.syllabusItems.length - 1;
    }
  }
}
