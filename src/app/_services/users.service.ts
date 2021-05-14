import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {User} from '../_models/user';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  _url = 'http://localhost:3000/sendmail/';
  errorData:{};
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private _http: HttpClient) { }
  enroll(user: User){
    return this._http.post<any>(this._url, user)
      .pipe(catchError(this.errorHandler));
  }
  contactForm(user: User) {
    return this._http.post<User>(this._url + 'api/contact', user, this.httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }
  getPage(slug: string) {
    return this._http.get<any>(this._url + 'api/page/' + slug)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  handleError(error: HttpErrorResponse){
    return throwError(error);
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }

}
