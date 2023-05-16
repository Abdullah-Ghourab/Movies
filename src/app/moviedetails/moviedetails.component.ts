import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent {
  prefixImg: string = 'https://image.tmdb.org/t/p/w500/'
  movieDetails: any
  constructor(_authMovie: MoviesService, private _activatedRouter: ActivatedRoute) {
    let id = _activatedRouter.snapshot.params['id']
    _authMovie.getDetails('movie', id).subscribe((data) => {
      this.movieDetails = data
    })
  }
}
