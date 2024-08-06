import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track:TrackModel = {_id: 0, name: '', album: '', url: '', cover: ''};
}
