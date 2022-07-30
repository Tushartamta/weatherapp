import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {allAppRoutes} from './routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './apixu.service';
import { initializeApp } from "firebase/app";
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    initializeApp
    
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
const firebaseConfig = {
  apiKey: "AIzaSyACIBD4_JobtqJier2Ix01vRf1k0pjxPuQ",
  authDomain: "weather-app-17fd5.firebaseapp.com",
  projectId: "weather-app-17fd5",
  storageBucket: "weather-app-17fd5.appspot.com",
  messagingSenderId: "882513227647",
  appId: "1:882513227647:web:18cb5f6ab40e2033b9344a"
};
