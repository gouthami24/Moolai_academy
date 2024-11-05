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
      availableDates: this.fb.group({
        nov9: [false],
        nov16: [false],
        both: [false],
      })
    });
  }

  // Check if at least one date is selected
  isDateSelected(): boolean {
    const { nov9, nov16, both } = this.bookNowForm.get('availableDates')?.value;
    return nov9 || nov16 || both;
  }

 // Get selected dates as an array
 getSelectedDates(dates: { nov9: boolean, nov16: boolean, both: boolean }) {
  const selectedDates = [];
  if (dates.nov9) selectedDates.push('Nov 9');
  if (dates.nov16) selectedDates.push('Nov 16');
  if (dates.both) selectedDates.push('Both');
  return selectedDates;
}


  onSubmit() {
    if (this.bookNowForm.valid) {
      const formData = this.bookNowForm.value;

      let reqObj = {
        email: formData.email,
        phonenumber: formData.contactNumber,
        fullname: formData.name,
        selectedDates: this.getSelectedDates(formData.availableDates),
      };

      // POST request to your Azure Function
      const azureFunctionUrl = 'https://trymool-sendgrid-email.azurewebsites.net/api/src';

      this.http.post(azureFunctionUrl, reqObj, { responseType: 'text' })
        .subscribe(
          (response: any) => {
            console.log('Email sent successfully', response);
            this.showSuccess();
            this.dialogRef.close();
          },
          (error: any) => {
            console.log('Error sending email', error);
            this.showError();
          }
        );
      
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
