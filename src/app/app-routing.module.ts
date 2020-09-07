import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { UploadComponent } from './modules/upload/view/upload.component';
import { EndpointComponent } from './modules/endpoint/view/endpoint.component';
import { SearchComponent } from './modules/search/view/search.component';
import { DetailsComponent } from './modules/details/view/details.component';


const routes: Routes = [
  { path: '', component: AboutComponent, pathMatch: 'full' },
  { path: 'upload', component: UploadComponent },
  { path: 'endpoint', component: EndpointComponent },
  { path: 'search', component: SearchComponent },
  { path: 'details', component: DetailsComponent },

  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

