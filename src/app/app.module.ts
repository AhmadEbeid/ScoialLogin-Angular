import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { GoogleSigninComponent } from './google-signin/google-signin.component';
import { FacebookSgininComponent } from './facebook-sginin/facebook-sginin.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleSigninComponent,
    FacebookSgininComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
