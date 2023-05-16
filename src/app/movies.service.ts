import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpClient: HttpClient) { }

  getTrending(movieType: string, pageNum?: number): Observable<any> {


    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${movieType}/week?api_key=8613e4e1776af4e8633cc311d67b3e09&page=${pageNum || 1}`)
  }

  getDetails(item: any, id: string) {
    return this._httpClient.get(`https://api.themoviedb.org/3/${item}/${id}?api_key=8613e4e1776af4e8633cc311d67b3e09&language=en-US`)
  }

}
