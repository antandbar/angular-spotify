import { Component } from '@angular/core';
import { NgIf, CommonModule  } from '@angular/common';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    cover: 'https://dididi.com',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url:'http://localhost/track.mp3',
    _id: 1
  }

}
