import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SectionGenericComponent
  ]
})
export class TracksModule { }
