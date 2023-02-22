import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGoogleService {

  constructor(private _http: HttpClient) { }


  //TODO: clean this code
  //TODO: Create interceptor to add token to headers
  loginGoogle(): Observable<any>{   
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

      

      return this._http.get('http://localhost:3000/google', httpOptions
      // {
      //   headers: new HttpHeaders(
      //     {
      //       'Content-Type': 'application/json',
      //       'Authorization': `Bearer: ${token}`
      //     }
      //   )
      // }
    );
  }
}
