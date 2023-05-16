import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  pageNumb: any = 1
  prefixImg: string = 'https://image.tmdb.org/t/p/w500/'
  trendingMovie: any = []
  constructor(private _moviesService: MoviesService) {


  }
  ngOnInit(): void {
    this.getTrending()

  }
  getTrending() {
    const sub = this._moviesService.getTrending('movie', this.pageNumb).subscribe((data) => {
      this.trendingMovie = data.results
      sub.unsubscribe()
    })
  }
  paginateMovies(operation: number) {
    if (this.pageNumb == 1 && operation == -1) {
      return
    }
    this.pageNumb += operation
    this.getTrending()
  }

}
