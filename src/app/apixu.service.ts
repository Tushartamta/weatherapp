import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http:HttpClient) { }

  getWeather(location: string){
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=b403f738b46e977e7fc3a3348aabc74a&query='+location
    );
}
}
