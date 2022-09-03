import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './authform.component'; 
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [ AuthFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
})
export class AuthModule {}