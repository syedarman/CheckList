import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateListComponent } from './create-list/create-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"create-list",
    component:CreateListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
