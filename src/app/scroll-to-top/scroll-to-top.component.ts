import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {

  windowScrolled: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  

// When the user scrolls down 20px from the top of the document, show the button

  @HostListener("document:scroll") scrollover() {
    // var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      (document.querySelector(
                        ".myBtn"
                       ) as HTMLElement).style.display = "block";
    } else {
      (document.querySelector(
        ".myBtn"
       ) as HTMLElement).style.display = "none";
    }

      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
      // (function smoothscroll() {
      //     var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      //     if (currentScroll > 0) {
      //         window.requestAnimationFrame(smoothscroll);
      //         window.scrollTo(0, currentScroll - (currentScroll / 8));
      //     }
      // })();
  }
  ngOnInit() {}
}