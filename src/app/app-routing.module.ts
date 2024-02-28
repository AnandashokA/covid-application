import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { Register2Component } from './components/user/register2/register2.component';
import { AdminloginComponent } from './components/user/adminlogin/adminlogin.component';
import { CorePageComponent } from './components/core-page/core-page.component';
import { ShowComponent } from './components/show/show.component';
import { NavbarComponent } from './components/navbar/navbar.component';
const routes: Routes = [
  { path: ' ', redirectTo:'/nav' ,pathMatch:'full'},

  {path:'nav' , component:NavbarComponent},
  {path:'home' , component:HomeComponent},
  {path:'register' , component:Register2Component},
  {path:'login' , component:LoginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'list',component:CorePageComponent},
  {path:'show', component:ShowComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
