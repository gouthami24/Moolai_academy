import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-now-modal',
  templateUrl: './book-now-modal.component.html',
  styleUrls: ['./book-now-modal.component.css']
})
export class BookNowModalComponent {
  bookNowForm: FormGroup;

  constructor(
    private emailService: EmailService,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BookNowModalComponent>
  ) {
    this.bookNowForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.bookNowForm.valid) {
      console.log("Booknowform Inside On Submit Name, Email, Contact: ",this.bookNowForm.value);
      const formData = this.bookNowForm.value;
      console.log("Inside On Submit Name, Email, Contact: ",formData);

      // const emailData = {
      //   to: ['swarna.goldstar@gmail.com', 'swarnab@trymool.ai'],
      //   subject: 'August 25th 2024 Cohort',
      //   text: `Name: ${formData.name}\nEmail: ${formData.email}\nContact Number: ${formData.contactNumber}`
      // };

      this.emailService.sendEmail(formData.name, formData.email, formData.contactNumber)
      .subscribe(
        response => {
          console.log('Email sent successfully', response);
          this.showSuccess();
        },
        error => {
          console.error('Error sending email', error);
          this.showError();
        }
      );
      this.dialogRef.close();
    }
  }
  
  showSuccess() {
    this.snackBar.open('Email sent successfully!', 'Close', {
      duration: 3000,
      panelClass: ['snackbar-success']
    });
  }

  showError() {
    this.snackBar.open('Failed to send email. Please try again.', 'Close', {
      duration: 3000,
      panelClass: ['snackbar-error']
    });
  } 
   
  onClose(): void {
    this.dialogRef.close();
  }
}
