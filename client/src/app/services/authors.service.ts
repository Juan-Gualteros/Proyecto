import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {authors}  from '../models/author';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }


  getAuthors(){
    return this.http.get(`${this.API_URI}/authors`);
  }
  saveAuthor(author: authors){
    return this.http.post(`${this.API_URI}/authors`, name);
  }
  
  deleteAuthor(author_id: string){
    return this.http.delete(`${this.API_URI}/authors/${author_id}`);
  }

  updateAuthor(author_id: string|number, updatedAuthor: authors){
    return this.http.put(`${this.API_URI}/authors/${author_id}`, updatedAuthor);
  }

}
