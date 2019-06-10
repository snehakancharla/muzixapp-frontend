import { Component, OnInit } from '@angular/core';
import { MuzixService } from '../muzix.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private muzixService:MuzixService, private route: ActivatedRoute,private location: Location,
    private router:Router) { }
  arrayOfMuzix:any=[];
 
  ngOnInit() {
    this.getWishList();
  }
 
  addToWishList(muzix): void{
    this.muzixService.addToWishList(muzix);
 
 }

 getWishList():void{
   this.muzixService.getWishList().subscribe(data =>{
     console.log(data);
     this.arrayOfMuzix = data;
   })

 }
}