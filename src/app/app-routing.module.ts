import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { loginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent },
  { path: 'tv', canActivate: [AuthGuard], component: TvComponent },
  { path: 'people', canActivate: [AuthGuard], component: PeopleComponent },
  { path: 'moviedetails/:id', canActivate: [AuthGuard], component: MoviedetailsComponent },
  { path: 'tvdetails/:id', canActivate: [AuthGuard], component: TvdetailsComponent },
  { path: 'peopledetails/:id', canActivate: [AuthGuard], component: PeopledetailsComponent },
  { path: 'login', component: loginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
  { path: 'network', canActivate: [AuthGuard], component: NetworkComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
