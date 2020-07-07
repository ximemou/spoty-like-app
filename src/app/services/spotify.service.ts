import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }




getQuery( query: string) {

  // completar el Bearer para que funcione
  const url = `https://api.spotify.com/v1/${query}`;
  const headers = new HttpHeaders({
    Authorization: 'Bearer',  // completar el Bearer para que funcione
  });
  return this.http.get(url, {headers});

}

getNewReleases() {
  return this.getQuery('browse/new-releases?limit=20')
  .pipe( map( (data: any) => data.albums.items));
}

getArtists( searched: string) {
return this.getQuery(`search?q=${ searched }&type=artist&limit=15`)
  .pipe(map ((data: any) =>
     data.artists.items
  ));
}

getArtist( id: string) {
  return this.getQuery(`artists/${ id }`);
  }

getTopTracks( id: string) {
  return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe(map ((data: any) =>
      data.tracks
    ));
  }

}
