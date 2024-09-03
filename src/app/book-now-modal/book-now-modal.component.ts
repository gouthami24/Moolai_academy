import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../email.service';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var Email: any;

@Component({
  selector: 'app-book-now-modal',
  templateUrl: './book-now-modal.component.html',
  styleUrls: ['./book-now-modal.component.css']
})
export class BookNowModalComponent {
  bookNowForm: FormGroup;
  email="";
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

      let reqObj = 
  {
    email: formData.email,
    phonenumber: formData.contactNumber,
    fullname: formData.name
  }

  this.http.post('https://mool-be-academy-cnefh7fycjerceg7.eastus-01.azurewebsites.net/send-email', reqObj)
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
//   Email.send({
//     Host : "smtp.elasticemail.com",
//    Username : "trymoolai@outlook.com", 
//    Password : "C1850A80DD1C6A1D4DBDAD945A7DE4D24118",          //Enter your password here
//    To : "swarna.goldstar@gmail.com",
//    From : "trymoolai@outlook.com",
//    Subject : "Gen AI Academy Ayg 25th Cohort",
//   Body : `
         
//          <b>Name: 
//         </b>${reqObj.fullname} <br />
//          <b>Email: </b>${reqObj.email}<br />
//         <b>Phone Number:</b> <br /> 
//         ${reqObj.phonenumber} <br>
//         <br> <b>~End of Message.~</b> `
// }).then((response: any) => {
     
//       console.log(response);
//       this.showSuccess();
     
//     }, (error: any) => {
//       console.log({ error });
//       this.showError();
//     })

      // const emailData = {
      //   to: ['swarna.goldstar@gmail.com', 'swarnab@trymool.ai'],
      //   subject: 'August 25th 2024 Cohort',
      //   text: `Name: ${formData.name}\nEmail: ${formData.email}\nContact Number: ${formData.contactNumber}`
      // };

      // this.emailService.sendEmail(formData.name, formData.email, formData.contactNumber)
      // .subscribe(
      //   response => {
      //     console.log('Email sent successfully', response);
      //     this.showSuccess();
      //   },
      //   error => {
      //     console.error('Error sending email', error);
      //     this.showError();
      //   }
      // );
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
