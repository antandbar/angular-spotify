import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from "../../../../shared/shared.module";
import { SectionGenericComponent } from "../../../../shared/components/section-generic/section-generic.component";
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SharedModule, SectionGenericComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})

export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRadom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }


  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
  }

  async loadDataAll(): Promise<any> {

    /*     this.trackService.getAllTracks$().
          subscribe((response: TrackModel[]) => {
            this.tracksTrending = response
          }) */

    /*     this.trackService.getAllTracks$().toPromise()
        .then(res => {})
        .catch(err => {
          console.log("Error de conexion");
        }) */

    this.tracksTrending = await this.trackService.getAllTracks$().toPromise();
  }

  loadDataRandom(): void {

    this.trackService.getAllRandom$().
      subscribe((response: TrackModel[]) => {
        this.tracksRadom = response
      })
  }
  ngOnDestroy(): void {

  }

}
