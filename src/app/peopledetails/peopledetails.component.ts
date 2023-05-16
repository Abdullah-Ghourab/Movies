import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.scss']
})
export class PeopledetailsComponent {
  prefixImg: string = 'https://image.tmdb.org/t/p/w500/'
  peopleDetails: any
  constructor(_authPerson: MoviesService, private _activatedRouter: ActivatedRoute) {
    let id = _activatedRouter.snapshot.params['id']
    _authPerson.getDetails('person', id).subscribe((data) => {
      this.peopleDetails = data
    })
  }

}
