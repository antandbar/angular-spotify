import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { TrackModel } from '@core/models/tracks.model';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [NgIf, NgClass, ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track:TrackModel = {_id: 0, name: '', album: '', url: '', cover: ''};

  constructor(private multimediaService: MultimediaService) { }

  sendPlay(track: TrackModel): void {
    this.multimediaService.callback.emit(track);
  }

}
