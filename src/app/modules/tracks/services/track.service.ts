import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { map, mergeMap, Observable, tap } from 'rxjs';
import { enviorement } from 'src/enviorements/enviorement';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = enviorement.api;

  constructor(private httpClient: HttpClient) { }

  private skipById(listTracks:TrackModel[], id:number):Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.slice().filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data
        })
      )
  }

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, 2)),
        /* map((response: any) => {
          return response.data.slice().filter((track:TrackModel) => track._id !== 1);
        }) */
        tap(data => console.log('ok ok ok', data))
      )
  }
}
