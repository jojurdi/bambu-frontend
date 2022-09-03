import { RouterModule, Routes } from '@angular/router';

import { AuthFormComponent } from './authform.component';
import { NgModule } from '@angular/core'; 

const routes: Routes = [
  { path: '', component: AuthFormComponent },
  { path: 'register', component: AuthFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}