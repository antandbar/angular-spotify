import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgIf, CommonModule  } from '@angular/common';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; // Programación reactiva

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy{
  mockCover: TrackModel = {
    cover: 'https://dididi.com',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url:'http://localhost/track.mp3',
    _id: 1
  }

  listObservers$:Array<Subscription> = [];

  constructor(private multimediaService:MultimediaService){ }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log("Recibiendo cancion ...", response);
      }
    )

    this.listObservers$ = [observer1$/* ,observer2$ */];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }

}
