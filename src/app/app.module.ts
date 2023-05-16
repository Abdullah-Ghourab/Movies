import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { NetworkComponent } from './network/network.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { loginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { FooterComponent } from './footer/footer.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    PeopleComponent,
    TvComponent,
    NetworkComponent,
    AboutComponent,
    NavbarComponent,
    loginComponent,
    RegisterComponent,
    MoviedetailsComponent,
    NotfoundComponent,
    TvdetailsComponent,
    FooterComponent,
    PeopledetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
