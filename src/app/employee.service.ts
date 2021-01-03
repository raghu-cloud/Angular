import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string="/assets/data/employees.json"

  public errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Internal Server Error");
  }

  constructor(private http : HttpClient) { }

  public getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
  }
}
