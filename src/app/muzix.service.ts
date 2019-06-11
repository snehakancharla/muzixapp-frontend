import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MuzixService {

  constructor(private http:HttpClient) { }

  addToWishList(value) : any {
    this.http.post("http://localhost:8087/api/v1/track",value).subscribe();
    console.log(value);
   }
   getWishList() : any {
  return  this.http.get("http://localhost:8087/api/v1/track");
    // console.log(value);
   }
   deleteTrack(value) : any {
     return this.http.delete(`http://localhost:8087/api/v1/track/${value}`).subscribe();
    console.log(value);
   }
   fullDetails(name,comment): any {
     console.log("in service", name, comment)
     return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=96e57f35a56ebc8ff8c03398d2fa94b2&artist=${comment}&album=${name}&format=json`);
    
   }

  getTrendMuzix():any{
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=96e57f35a56ebc8ff8c03398d2fa94b2&format=json");
  }

  getMuzix(value):any{
    var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=96e57f35a56ebc8ff8c03398d2fa94b2&track=${value}&format=json`;
    return this.http.get(url);
  }
  

}
