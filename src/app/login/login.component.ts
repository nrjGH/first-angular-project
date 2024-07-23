import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  onSubmit(form: any) {
    if (form.valid) {
      // Replace with actual login logic (e.g., HTTP request to backend)
      console.log(form.value);
      // After successful login, navigate to dashboard or desired route
    }
  }
}
