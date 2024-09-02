import { Component, Input, input } from '@angular/core';
import { CommonModule, NgClass  } from '@angular/common';
import { TrackModel } from '@core/models/tracks.model';
import { SharedModule } from "../../shared.module";
import { CardPlayerComponent } from "../card-player/card-player.component";

@Component({
  selector: 'app-section-generic',
  standalone: true,
  imports: [CommonModule, NgClass, SharedModule, CardPlayerComponent],
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<TrackModel> = []

}
