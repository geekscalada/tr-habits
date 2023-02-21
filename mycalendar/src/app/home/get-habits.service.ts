import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GetHabitsService {

  

  constructor(private _http: HttpClient) { }



  //TODO: clean this code
  getHabitsByMonth(month : number): Observable<any>{    

      return this._http.get('http://localhost:3000/day/getbymonth/' + month
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



