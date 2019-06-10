import { Component, OnInit } from '@angular/core';
import { MuzixService } from '../muzix.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private muzixService:MuzixService ,private route :Router) { }
  arrayOfMuzix:any=[];
  ngOnInit() {
      this.muzixService.getTrendMuzix().subscribe(data=>
        {
            console.log(data.tracks.track);
            this.arrayOfMuzix=data.tracks.track;
        });

  }
  addToWishList(value) {
    // this.route.navigateByUrl("/addFav/"+value);
    console.log("Fav Works");
 
    let myMusic = {
      id:value.listeners,
      name: "Album:"+value.name,
      comment: value.artist.name
    }
    this.muzixService.addToWishList(myMusic);
  }

  deleteTrack(value){

  }
  click(value){
   
    this.route.navigateByUrl("/result/"+value);
  
  }
 

}
