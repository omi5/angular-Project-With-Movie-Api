import { Component , OnInit} from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  
  ngOnInit(): void {
    
  }
  constructor(private searchService:MovieApiServiceService){}
  
  searchResult:any
  searchData = new FormGroup({
    movieName:new FormControl(null)
  })

  submitFrom(){
    // console.log(this.searchData.value, 'SearchMovieName#');
    this.searchService.searchMovie(this.searchData.value).subscribe((result: any) => {
      console.log(result, 'searchFromResult#');
      this.searchResult = result.results;
    });
    
      // this.searchResult = result.results;
      
   
  }

}
