import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { LoginComponent } from './components/user/login/login.component';
// import { provideHttpClient } from '@angular/common/http/with-fetch';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/user/register/register.component';
import { CorePageComponent } from './components/core-page/core-page.component';
import { AdminloginComponent } from './components/user/adminlogin/adminlogin.component';
import { Register2Component } from './components/user/register2/register2.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { trigger,state, style, animate, transition} from '@angular/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowComponent } from './components/show/show.component';
import { UserComponent } from './components/user/user.component';
// import { AuthService } from './auth.service';
// import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    CorePageComponent,
    AdminloginComponent,
    Register2Component,
    LoginComponent,
    NavbarComponent,
    ShowComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    ReactiveFormsModule,
    // AgmCoreModule,

    // ToastrModule.forRoot()

  ],
  providers: [
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    // AuthService,
    // provideHttpClient({
    //   useFetch: true // Enable fetch
    // })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
