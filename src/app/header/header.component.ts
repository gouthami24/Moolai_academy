import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = "assets/moolai_academy_logo_light.jpg";
  isDarkMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Load the theme preference if it exists
    const theme = localStorage.getItem('theme');
    this.isDarkMode = theme === 'dark';
    this.applyTheme();
  }

  toggleTheme(): void {
    this.logo =  "assets/moolai_academy_logo_dark.jpg";
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  applyTheme(): void {
    if (this.isDarkMode) {
      this.logo =  "assets/moolai_academy_logo_light.jpg";
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      this.logo =  "assets/moolai_academy_logo_dark.jpg";
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }
}
