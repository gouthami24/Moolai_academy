import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyComponent implements OnInit{
  logo = "assets/moolai_academy_logo_dark.jpg";
  isDarkMode: boolean = false;
  navbg:any;
  navlinkbg: any;
  constructor() { }

  ngOnInit(): void {
    // Load the theme preference if it exists
    const theme = localStorage.getItem('theme');
    this.isDarkMode = theme === 'dark';
    this.applyTheme();
  }

  toggleTheme(): void {
    console.log("Toggle Button clicked!!")
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  applyTheme(): void {
    console.log("Inside Apply theme");
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }
}
