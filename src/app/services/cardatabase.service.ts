import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Owner } from '../domain/owner';

@Injectable({
  providedIn: 'root'
})
export class CardatabaseService {

  baseUrl = 'http://localhost:8763';
  

  constructor( private http: HttpClient) { }

  getOwners() : Observable<Owner>{
    return this.http.get<Owner>(this.baseUrl + '/owners');
  }

  getOwner(name: string) : Observable<Owner>{
    return this.http.get<Owner>(this.baseUrl + '/owner/' + name);
  }

  addOwner(owner: Owner) : Observable<Owner>{
    return this.http.post<Owner>(this.baseUrl+'/owner/add', owner)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
