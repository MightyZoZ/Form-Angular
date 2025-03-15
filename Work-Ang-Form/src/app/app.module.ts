import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'; 
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppComponent, // ✅ Importing AppComponent
    RegisterComponent // ✅ Importing RegisterComponent
  ],
  providers: [],
//   bootstrap: [AppComponent] // ✅ Bootstrapping with AppComponent
})
export class AppModule { }
