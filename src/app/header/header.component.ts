import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookNowModalComponent } from '../book-now-modal/book-now-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = "assets/moolai_logo.png";
  isDarkMode: boolean = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    // Load the theme preference if it exists
    const theme = localStorage.getItem('theme');
    this.isDarkMode = theme === 'dark';
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }
  
  openBookNow(): void {
    this.dialog.open(BookNowModalComponent, {
      width: '400px', // Width of the modal dialog
      disableClose: false // Allows closing by clicking outside
    });
  }
  applyTheme(): void {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }
}
