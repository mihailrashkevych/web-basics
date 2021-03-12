import { Dog } from './dog';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DogService {
  constructor(private httpClient: HttpClient) { }

  url: string = "api/dog";

  get(): Observable<Dog[]> {
    return this.httpClient.get<Dog[]>(this.url);
  }

  /*POST*/
  addDog(dog: Dog): Observable<Dog> {
    const body = { name: dog.name, age: dog.age };
    return this.httpClient.post<Dog>(this.url, body, httpOptions);
  }
}
