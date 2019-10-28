import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQD5vyFGhg0XSIHsDVD4_5no0Oz7Keyq109w7EQCbyXB5KzREAItG1WJtGIgWw2lR_HT95JfdZViikaeFc8'
    });

    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe(data => console.log(data));
  }
}
