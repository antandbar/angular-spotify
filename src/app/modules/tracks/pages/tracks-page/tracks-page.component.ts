import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from "../../../../shared/shared.module";
import { SectionGenericComponent } from "../../../../shared/components/section-generic/section-generic.component";
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SharedModule, SectionGenericComponent] ,
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})

export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRadom: Array<TrackModel> = []

  listObservers$:Array<Subscription> = []

  constructor(private trackService:TrackService){}


  ngOnInit():void {
    const observer1$ = this.trackService.dataTracksTrending$
    .subscribe(response => {
      this.tracksTrending = response;
      this.tracksRadom = response;
      console.log("Canciones trending --->", response);
    })

    const observer2$ = this.trackService.dataTracksRandom$
    .subscribe(response => {
      this.tracksRadom = [...this.tracksRadom, ...response];
      console.log("Canciones Random --->", response);
    })

    this.listObservers$ = [observer1$, observer2$]
  }

  ngOnDestroy(): void {
   this.listObservers$.forEach(u => u.unsubscribe());
  }

}
