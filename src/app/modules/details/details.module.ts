import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { DetailsComponent } from './view/details.component';
import { DetailsService } from './controller/details.service';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DetailsComponent,
  ],
  providers: [
    DetailsService,
  ]
})
export class DetailsModule { }
