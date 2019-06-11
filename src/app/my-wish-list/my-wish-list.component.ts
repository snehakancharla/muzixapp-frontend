import { Component, OnInit } from '@angular/core';
import { MuzixService } from '../muzix.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-wish-list',
  templateUrl: './my-wish-list.component.html',
  styleUrls: ['./my-wish-list.component.css']
})
export class MyWishListComponent implements OnInit {

  constructor(private muzixService:MuzixService, private route: ActivatedRoute,
    private router:Router) { }
  arrayOfMuzix:any=[];
 
  ngOnInit() {
 
     this.getWishList();
  
}



getWishList():void{

  this.muzixService.getWishList().subscribe(data =>{
    console.log(data);
    this.arrayOfMuzix = data;
  })
}

details(muzix) : void{
  console.log(muzix);
  this.router.navigateByUrl("/dt/"+muzix.name+"/"+muzix.comment);
}

delete(muzix): void{

  console.log("routing to delete");
  var myVal = muzix.id;
  console.log(myVal);
  this.router.navigateByUrl("/delete/"+myVal);

  // var myVal = muzix.id;
  // this.muzixService.deleteTrack(myVal);
  // this.router.navigateByUrl("/favs");


}



}