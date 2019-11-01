import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const httpConfig = {
  headers: new HttpHeaders({
    'Authorization': '1536660107LWZ2JGK17J72HR4O5NU53FBBSLSMRB' //  Token should be an env var
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient
  ) {}

  getData() {
    return forkJoin([
      this.http.get('https://sherlock.aerobotics.io/developers/clients/', httpConfig), 
      this.http.get('https://sherlock.aerobotics.io/developers/scoutmissions/', httpConfig)
    ])
  }
}
