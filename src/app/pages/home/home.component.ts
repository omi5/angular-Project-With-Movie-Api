import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bannerResult:any[] = [];
  trandingMoviesResult: any[] = [];
  actionMovie:any[] =[]
  adventureMovie:any[]=[]
  animationMovie:any[] = []
  comedyMovie:any[] = []
  documentyMovie:any[]= []
  scienceFictionMovie:any[]= []
  thrillerMovie:any[] = []

  constructor(private service:MovieApiServiceService){}

  ngOnInit(): void {
    this.bannerData()
    this.trandingMoviesData()
    this.actionMovieData()
    this.adventureMovieData()
    this.animationMovieData()
    this.comedyMovieData()
    this.documentyMovieData()
    this.thrillerMovieData()
    this.scienceFictionMovieData()
  }

  //Banner Api Data
  bannerData(){
    return this.service.bannerApiData().subscribe(result =>{
      console.log(result,'bannerResult#');
      this.bannerResult = result.results; 
    })
  }

  //Tranding Movies Api Data

  trandingMoviesData(){
    return this.service.trandingMovieApiData().subscribe(result=>{
      console.log(result,'trandingMoviesData#');
      this.trandingMoviesResult = result.results
      
    })
  }
  actionMovieData(){
    return this.service.fetchActionMovies().subscribe(result=>{
      console.log(result,'actionMovieData#');
      this.actionMovie = result.results;
    })
  }
  adventureMovieData(){
    return this.service.fetchAdventureMovies().subscribe(result=>{
      this.adventureMovie = result.results;
    })
  }
  animationMovieData(){
    return this.service.fetchAnimationMovies().subscribe(result=>{
      this.animationMovie = result.results;
    })
  }
  comedyMovieData(){
    return this.service.fetchComedyMovies().subscribe(result=>{
      this.comedyMovie = result.results;
    })
  }
  documentyMovieData(){
    return this.service.fetchDocumentaryMovies().subscribe(result=>{
      this.documentyMovie = result.results;
    })
  }
  scienceFictionMovieData(){
    return this.service.fetchScienceFictionMovies().subscribe(result=>{
      this.scienceFictionMovie = result.results;
    })
  }
  thrillerMovieData(){
    return this.service.fetchThrillerMovies().subscribe(result=>{
      this.thrillerMovie = result.results;
    })
  }
 
  
}
