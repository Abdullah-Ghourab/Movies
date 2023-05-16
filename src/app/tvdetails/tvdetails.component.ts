import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent {
  prefixImg: string = 'https://image.tmdb.org/t/p/w500/'
  tvDetails: any
  constructor(_authTv: MoviesService, private _activatedRouter: ActivatedRoute) {
    let id = _activatedRouter.snapshot.params['id']
    _authTv.getDetails('tv', id).subscribe((data) => {
      this.tvDetails = data
    })
  }
}
