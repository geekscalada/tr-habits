import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginGoogleService {

  constructor(
    private _http: HttpClient,
    private _router: Router) {



  }



  authUser(user: any) : any {

    console.log("este es el user", user);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',

      })
    };


    this._http.get<{ authUrl: string }>('http://localhost:3000/google').subscribe((response) => {
      console.log("response.authUrl");
      // Redirigir al usuario a la ventana de autenticación de Google
      this._router.navigateByUrl(response.authUrl);
    });

  }

}
