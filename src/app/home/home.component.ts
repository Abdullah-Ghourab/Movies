import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  prefixImg: string = 'https://image.tmdb.org/t/p/w500/'
  trendingMovie: any[] = [];
  trendingTv: any[] = [];
  trendingPeople: any[] = [];
  constructor(_moviesService: MoviesService) {
    _moviesService.getTrending('movie').subscribe((data) => {
      this.trendingMovie = data.results.slice(0, 10)
    })
    _moviesService.getTrending('tv').subscribe((data) => {
      this.trendingTv = data.results.slice(0, 10)
    })
    _moviesService.getTrending('person').subscribe((data) => {
      this.trendingPeople = data.results.slice(0, 10)
    })

  }
}
