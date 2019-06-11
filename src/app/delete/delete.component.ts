import { Component, OnInit } from '@angular/core';
import { MuzixService } from '../muzix.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private muzixService:MuzixService, private route: ActivatedRoute,
    private router:Router) { }
  arrayOfMuzix:any=[];
 
  ngOnInit() {
    this.delete();
 
  }
 
  delete(): any {
    const myVar = this.route.snapshot.paramMap.get('myVal');
    this.muzixService.deleteTrack(myVar);
    this.router.navigateByUrl("favs");
 
 }
}
