import { Component } from '@angular/core';
import { SharedModule } from "../../../../shared/shared.module";
import { PlayListHeaderComponent } from "../../../../shared/components/play-list-header/play-list-header.component";

@Component({
  selector: 'app-favorites-page',
  standalone:true,
  imports: [SharedModule, PlayListHeaderComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent {

}
