import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calling-from-font',
  templateUrl: './calling-from-font.component.html',
  styleUrls: ['./calling-from-font.component.scss'],
})
export class CallingFromFontComponent implements OnInit {

  constructor(
    private _http: HttpClient,
    private _router: Router

  ) { }

  ngOnInit() {

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    //     'Accept': '*/*',
        
    //   })
    // }

    


    this._http.get<{ authUrl: string }>('http://localhost:3000/google').subscribe((response) => {
      console.log(response);
      // Redirigir al usuario a la ventana de autenticación de Google
      this._router.navigateByUrl(response.authUrl);
    });

  }

}
