import {Router} from "@angular/router"
import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SearchService } from '../controller/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  closeResult: string;
  isValid = false;
  emptyQuery = false;
  result: any;
  goopDetails: any;
  query:string;

  constructor(
    private modalService: NgbModal,
    private searchService: SearchService,
    private router: Router

    ) { }

  ngOnInit() {

  }

  advancedSearch() {
    console.log("redirecionando");
    this.router.navigate(['/endpoint'])
  }

  closeAlert() {
    this.emptyQuery = false;
  }
  
  search() {
    console.log(this.query);
    this.searchService.searchGoop(this.query).subscribe((data)=>{
      this.result = data;
      console.log(this.result);
      this.result.goops.length > 0 ? this.isValid = true : this.emptyQuery = true;
    });
  }

  navigate2details(goop:any) {
    this.router.navigateByUrl('/details', { state:  goop });
  }

  open(content, iri) {
    this.searchService.searchEntities(iri).subscribe(result => {
      this.goopDetails = result;
      console.log(result);
    })
    this.goopDetails = {
      "classes": ["Temporal Position", "General Date Time Description", "Time Position", "Date Time Description"]
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
