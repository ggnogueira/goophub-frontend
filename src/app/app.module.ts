import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

// CodeMirror editor
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
 
// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

/* Import dos componentes */
import { AppComponent } from './app.component';
import { Error404Component } from './pages/error404/error404.component';

/* Import dos modulos */

import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './modules/search/controller/search.service';
import { SearchModule } from './modules/search/search.module';
import { UploadModule } from './modules/upload/upload.module';
import { EndpointModule } from './modules/endpoint/endpoint.module';
import { AboutComponent } from './pages/about/about.component';
import { DetailsModule } from './modules/details/details.module';
import { DetailsService } from './modules/details/controller/details.service';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    CodemirrorModule,
    HttpClientModule,
    SearchModule,
    UploadModule,
    EndpointModule,
    DetailsModule
  ],
  providers: [
    SearchService,
    DetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
