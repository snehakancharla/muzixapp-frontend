import { Component, OnInit } from '@angular/core';
import { MuzixService } from '../muzix.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private muzixService:MuzixService, private route: ActivatedRoute,
    private router:Router) { }
    info:any;

  ngOnInit() {
    this.details();
  }
details():any{
  const name = this.route.snapshot.paramMap.get('name');
  const comment = this.route.snapshot.paramMap.get('comment');
  console.log("name    "+name);
  console.log("comment  "+comment);
  this.muzixService.fullDetails(name,comment).subscribe( data => {  
    console.log("This too works.."+data);
    this.info=data;
    
  });
}
}


