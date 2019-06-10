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
    this.http.get("http://localhost:8087/api/v1/track").subscribe();
    // console.log(value);
   }
   deleteTrack(value) : any {
    this.http.delete("http://localhost:8087/api/v1/track/{id}",value).subscribe();
    console.log(value);
   }

  getTrendMuzix():any{
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=96e57f35a56ebc8ff8c03398d2fa94b2&format=json");
  }

  getMuzix(value):any{
    var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=96e57f35a56ebc8ff8c03398d2fa94b2&track=${value}&format=json`;
    return this.http.get(url);
  }
  

}
