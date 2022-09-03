import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  ArticleRes } from '../interfaces/new-data.interfase';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class NewService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines'

  constructor(private http: HttpClient) { }

  getNews(Category: String ,Country: String  ) : Observable<ArticleRes> { 
    return this.http
    .get<ArticleRes>(this.apiUrl + '?country=' + Country + '&category='+Category + '&apiKey=245d40ac14ca45ffb6d81906ddf0b24b');
  }

   
}