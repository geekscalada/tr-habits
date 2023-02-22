import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetHabitsService {

  

  constructor(private _http: HttpClient) { }



  //TODO: clean this code
  //TODO: Create interceptor to add token to headers
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
