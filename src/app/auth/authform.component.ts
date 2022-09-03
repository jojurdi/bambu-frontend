import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginData } from 'src/app/core/interfaces/login-data.interface'; 
import { Router } from '@angular/router';


@Component({
  selector: 'auth-component',
  templateUrl: './authform.component.html',
  styleUrls: ['./authform.component.css']
})

export class AuthFormComponent {
  @Output() formData: EventEmitter<{
    email: string;
    password: string;
  }> = new EventEmitter();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['jojurdi@gmail.com', [Validators.required, Validators.email]],
      password: ['master01', Validators.required],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
 

  onSubmit( ) {
    this.authService
      .login(this.form.value)
      .then(() => this.router.navigate(['/dashboard']))
      .catch((e) => console.log(e.message));
  }

   
}
