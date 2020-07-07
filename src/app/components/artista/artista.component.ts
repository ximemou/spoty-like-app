import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artist: any = {};
  topTracks: any [] = [];

  loading: boolean;
  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
                this.loading = false;
                this.router.params.subscribe( params => {
    this.getArtista(params.id);
    this.getTopTracks(params.id);

  });

  }

  getArtista( id: string) {
    this.loading = true;
    this.spotify.getArtist(id)
    . subscribe( artista => {
       this.artist = artista;
       this.loading = false;
    });
  }

  getTopTracks( id: string) {
    this.spotify.getTopTracks(id)
    .subscribe(topTracks => {
      this.topTracks = topTracks;
    });
  }

}
