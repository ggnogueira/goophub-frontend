import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndpointComponent } from './view/endpoint.component';
import { FormsModule } from '@angular/forms'

import { CodemirrorModule } from '@ctrl/ngx-codemirror';



@NgModule({
  declarations: [EndpointComponent],
  imports: [
    CommonModule,
    FormsModule,
    CodemirrorModule
  ],
  exports: [
    EndpointComponent,
  ],
})
export class EndpointModule { }
