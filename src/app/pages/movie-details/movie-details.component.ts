import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private movieDetails:MovieApiServiceService, private router:ActivatedRoute){}

  getMovieDetails:any
  MovieVideo: any
  movieCast: any

  ngOnInit(): void {
    const getId = this.router.snapshot.paramMap.get('id') 
    this.getMovie(getId)
    this.getMovieVideo(getId)
    this.getMovieCast(getId)
  }

  getMovie(id:any){
    this.movieDetails.getMovieDetails(id).subscribe(result=>{
      console.log(result,'getMovieDetails#');
      this.getMovieDetails = result;
    })
  }
  getMovieVideo(id:any){
    this.movieDetails.getMovieVideo(id).subscribe(result=>{
      console.log(result,'movieVideo');
      this.MovieVideo = result.results;
      
    })
  }
  getMovieCast(id:any){
    this.movieDetails.getMovieCast(id).subscribe(result=>{
      console.log(result,'movieCast#');
      this.movieCast = result.cast;
      
    })
  }

}
