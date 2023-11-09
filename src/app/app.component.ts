import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Moolai_stealth';
  
  onSubmit() {
    console.log('Button Clicked!!');
  }
}
