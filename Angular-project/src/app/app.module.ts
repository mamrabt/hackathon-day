import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ConnexionComponent
  ],
  imports: [
    RouterModule, 
    BrowserModule, AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }


