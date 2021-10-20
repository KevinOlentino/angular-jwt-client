import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'security', component: SecurityComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
