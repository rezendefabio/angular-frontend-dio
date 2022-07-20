import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../shared/models/book';

@Injectable()
export class BookService {
  // URL da API
  private API_URL = 'http://localhost:3000';

  //   Http Headers
  httpOptions = {
    Headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getBook() {
    return this.http.get<Book>(`${this.API_URL}/product`);
  }
}
