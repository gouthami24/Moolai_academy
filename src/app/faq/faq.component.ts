import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    { question: 'What is Generative AI?', answer: 'Generative AI refers to artificial intelligence systems that can create new content such as text, images, music, and more, often by learning patterns from existing data. It encompasses technologies like GPT (Generative Pre-trained Transformers) and GANs (Generative Adversarial Networks).' },
    { question: 'Who can enroll in your courses?', answer: 'Our courses are designed for a wide range of learners, from beginners with no prior experience in AI to advanced practitioners looking to deepen their knowledge. We welcome students from diverse backgrounds including data science, computer science, business, and more.' },
    { question: 'How are the courses structured?', answer: 'Our courses are a mix of live lectures, hands-on projects, quizzes, and interactive sessions. Each course is designed to provide both theoretical knowledge and practical skills. Additionally, we offer live Q&A sessions and forums for peer interaction and support.' },
    { question: 'What kind of projects will I work on?', answer: 'Students will work on real-world projects that may include developing generative models for text, images, music, or other media. These projects are designed to help you apply the concepts learned in class and build a portfolio of work.' },
    { question: 'Do I need any prior knowledge or skills before enrolling?', answer: 'No, there are no prerequisites to learn our courses.' },
    { question: 'How long do the courses take to complete?', answer: 'Course durations vary depending on the level and complexity. Introductory courses may take a few weeks, while more advanced courses can take several months. Each course is designed to be flexible, allowing you to learn at your own pace.' },
    { question: 'What is the cost of the courses?', answer: 'Course fees vary depending on the course level and content. We offer competitive pricing and various payment plans to accommodate different budgets. Contact our team for more information.' },
    { question: 'Are there any certifications offered?', answer: 'Yes, upon successful completion of our courses, students receive a certificate that can be shared on professional networks and added to your resume. These certificates demonstrate your proficiency in Generative AI.' },
    { question: 'How can I enroll in a course?', answer: 'Enrollment can be done directly through our website. Just apply on our website and our representative will reach out to you.' },
    { question: 'Do you offer any support or mentorship?', answer: 'Yes, we provide continuous support through our offline forums, email support, and live Q&A sessions with instructors.' },
    { question: 'Can I access the course materials after completion?', answer: 'Yes, once you enroll in a course, you will have 6 months access to the course materials, including video/audio lectures, project files, and additional resources.' },
    { question: 'How can I contact the academy for more information?', answer: 'You can reach us via email at outreach@astrallogic.ai or through our contact form on the website. We are here to assist you with any questions or concerns you may have.' },
    { question: 'Do you offer corporate or group training?', answer: 'Yes, we provide customized training programs for businesses and groups. Please contact us for more information on corporate training packages and group discounts.' },
    { question: 'Do you provide job placement service after completion?', answer: 'We do not offer job placement services directly but we can connect you with our network of industry partners.' },
    { question: 'Do you customize training?', answer: 'Yes, we offer customized training programs tailored to the specific needs of businesses, organizations, and groups. Please contact us for more information on how we can create a personalized training solution for you.' },
    { question: 'What is course timing?', answer: 'Our courses are designed to be flexible to accommodate different schedules. We offer both fixed-time classes and self-paced learning options. Specific timings for live sessions will be provided in the course details.' },
    { question: 'Is the course online or in person?', answer: 'Our in-person courses are conducted at our state-of-the-art facilities. We will soon have online classes too.' },
    { question: 'Does the instructor have office hours?', answer: 'Yes, our instructors hold regular office hours where students can ask questions, seek clarification on course materials, and receive additional guidance. The schedule for office hours will be provided at the beginning of each course.' },
    { question: 'Do I need to bring on my device?', answer: 'Yes you need to bring your own laptop.' },
    { question: 'Is there any real world project along with the course?', answer: 'Yes, A capstone project will be assigned to each of the groups.' },
    // Add more FAQs here
  ];

  showAll = false;
  visibleFaqs = this.faqs.slice(0, 3); // Show the first 3 FAQs by default

  toggleShowAll() {
    this.showAll = !this.showAll;
    this.visibleFaqs = this.showAll ? this.faqs : this.faqs.slice(0, 3);
  }
}
