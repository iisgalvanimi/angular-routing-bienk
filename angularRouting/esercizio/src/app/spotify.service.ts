import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})

export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient


  constructor(private http: HttpClient) {
        const headers = new HttpHeaders({Authorization: environment.oauthToken});
   }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer curl -X "GET" "https://api.spotify.com/v1/search?q=Brivido&type=track" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQDex0QhrvzpMyVmc5Nz4ecODs0Hp0yJ0qZfNEzhTLvygxW_GAcbPu8NyajG6WSeEp881r-F4_qDgpTDtyXdcZsUtcz-hjweQ2PFVfiV5eo_pS_musEbOD5u-RRJC4-nX_Q8f21fylxiSuG5"'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
    
 //Ritorno un observable ai componenti che richiedono il servizio
  }
   getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer TUO_AUTH'
    });
    
    return this.http.get(url, { headers });
  }
}
