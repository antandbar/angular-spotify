import { Component } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import * as dataRaw from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';
import { OrderListPipe } from "../../pipe/order-list.pipe";



@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [NgFor, CommonModule, OrderListPipe],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {
  tracks: TrackModel[] = []
  optionSort: {property:string | null, order:string} = {property:null, order:'asc'}

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default; 
    this.tracks = data;
  }

  changeSort(property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}
