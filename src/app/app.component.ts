import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoolAI';
  
  constructor() { 
  }
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');
    
  }

  onActivate() {
   
      window.scroll({ 
              top: 0, 
              left: 0, 
              behavior: 'smooth' 
       });
   
      
}
}
