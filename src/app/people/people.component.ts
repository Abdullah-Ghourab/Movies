import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingPeople: any = [];
  pageNum = 1
  prefixImg: string = 'https://image.tmdb.org/t/p/w500/'
  constructor(private _moviesService: MoviesService) {

  }
  ngOnInit(): void {
    this.getTrending()
  }
  getTrending() {
    const sub = this._moviesService.getTrending('person', this.pageNum).subscribe((data) => {
      this.trendingPeople = data.results
      sub.unsubscribe()
    })
  }
  paginatePeople(operation: number) {
    if (this.pageNum == 1 && operation == -1) {
      return
    }
    this.pageNum += operation
    this.getTrending()
  }

}
