import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-now-modal',
  templateUrl: './book-now-modal.component.html',
  styleUrls: ['./book-now-modal.component.css']
})
export class BookNowModalComponent {
  bookNowForm: FormGroup;

  constructor(
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
      const formData = this.bookNowForm.value;

      let reqObj = {
        email: formData.email,
        phonenumber: formData.contactNumber,
        fullname: formData.name
      };

      // POST request to your Azure Function
      const azureFunctionUrl = 'https://trymool-sendgrid-email.azurewebsites.net';

      this.http.post(azureFunctionUrl, reqObj)
        .subscribe(
          (response: any) => {
            console.log('Email sent successfully', response);
            this.showSuccess();
          },
          (error: any) => {
            console.log('Error sending email', error);
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
