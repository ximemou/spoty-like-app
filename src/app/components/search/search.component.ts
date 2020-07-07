import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any [] = [];
  loading: boolean;


  constructor(private spotify: SpotifyService) {
   }
  search(wordsSearched: string ) {
    this.loading = true;
    if (wordsSearched.length > 0) {
      this.spotify.getArtists(wordsSearched)
      .subscribe((data: any) => {
        this.loading = false;
        this.artists = data;
      });
    } else {
      this.loading = false;
    }
  }
}
