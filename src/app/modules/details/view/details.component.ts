import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { DetailsService } from '../controller/details.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private goop: any;
  private result: any;
  
  constructor(
    private detailsService:DetailsService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private ref: ChangeDetectorRef) {
      this.goop = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    console.log(this.goop);
    if(this.goop) {
      this.detailsService.searchEntities(this.goop.iri).subscribe(result => {
        console.log(result);
        this.result = result;
        this.goop.classes = this.result.classes;
        this.goop.properties = this.result.properties;
        this.goop.url = this.result.url;
      })
    }
    this.ref.detectChanges();
  }

  getGoopName() {
    return this.goop.name;
  }

  getGoopType() {
    return this.goop.type;
  }

  getGoopIRI() {
    return this.goop.iri;
  }

  getGoopClasses() {
    return this.goop.classes;
  }
  
  getGoopProperties() {
    return this.goop.properties;
  }

  getGoopURL() {  
    return this.goop.url;
  }
}
