import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  pageN = 1
  trendingTv: any = []
  prefixImg: string = 'https://image.tmdb.org/t/p/w500/'
  constructor(private _moviesService: MoviesService) {
  }
  ngOnInit(): void {
    this.getTrendingTv()
  }
  getTrendingTv() {
    this._moviesService.getTrending('tv', this.pageN).subscribe((data) => {
      this.trendingTv = data.results
    })
  }
  paginateTv(operation: number) {
    if (this.pageN == 1 && operation == -1) {
      return
    }
    this.pageN += operation
    this.getTrendingTv()

  }
}

