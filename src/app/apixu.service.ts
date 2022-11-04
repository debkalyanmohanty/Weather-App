import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
    getWeather(location: string){
      return this.http.get(
        'http://api.weatherstack.com/current?access_key=249e1ecc66285b2a6d2060b585163ad7&query='+location
      );
    }

}
