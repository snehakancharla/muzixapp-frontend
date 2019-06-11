import { Component, OnInit } from '@angular/core';
import { MuzixService } from '../muzix.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  constructor(private muzixService:MuzixService, private route: ActivatedRoute,private location: Location,
    private router:Router) { }
  arrayOfMuzix:any=[];

  ngOnInit() {
    this.getMuzix();
  }
 

getMuzix(): void {

    const search = this.route.snapshot.paramMap.get('searchid');
     this.muzixService.getMuzix(search).subscribe(data => {
     console.log("This too works..");
      this.arrayOfMuzix=data.results.trackmatches.track;
      console.log(this.arrayOfMuzix);
     
  });
}


}
