import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookNowModalComponent } from '../book-now-modal/book-now-modal.component';

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
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    // Load the theme preference if it exists
    const theme = localStorage.getItem('theme');
    this.isDarkMode = theme === 'dark';
    this.applyTheme();
  }
  
  openBookNow(): void {
    this.dialog.open(BookNowModalComponent, {
      width: '400px', // Width of the modal dialog
      disableClose: false // Allows closing by clicking outside
    });
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
