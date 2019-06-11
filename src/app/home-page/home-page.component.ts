import { Component, OnInit } from '@angular/core';
import { MuzixService } from '../muzix.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private muzixService:MuzixService, private route: ActivatedRoute,
    private router:Router) { }
  arrayOfMuzix:any=[];
  ngOnInit() {
      this.muzixService.getTrendMuzix().subscribe(data=>
        {
            console.log("sneha");
            console.log(data.tracks.track);
            this.arrayOfMuzix=data.tracks.track;
        });

  }

  addToWishList(value) {
     //this.route.navigateByUrl("/addFav/"+value);
    console.log("Fav Works");
 
    let myMusic = {
      id:value.listeners,
      name:value.name,
      comment: value.artist.name
    }
    console.log(myMusic);
    this.muzixService.addToWishList(myMusic);
  }

  details(muzix) : void{
    console.log(muzix);
    this.router.navigateByUrl("/dt/"+muzix.name+"/"+muzix.comment);
  }
  
  click(value){
   
    this.router.navigateByUrl("/result/"+value);
  
  }
 

}
