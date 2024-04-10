import { Component } from '@angular/core';
import { newUser } from './sign-up-interface';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  user: newUser = {
    firstName: '',
    email: '',
    lastName: '',
    password: '',
  };

  onSubmit(): void {
    console.log(this.user);
  }
}
