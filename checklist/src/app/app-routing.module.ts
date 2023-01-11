import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateListComponent } from './create-list/create-list.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"create-list",
    component:CreateListComponent,
    canActivate : [AuthGuard]
  },
  {
    path:"",
    pathMatch:'full',
    redirectTo: "login"
  },
  {
    path:"*",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
