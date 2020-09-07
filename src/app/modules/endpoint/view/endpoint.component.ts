import { Component, OnInit } from '@angular/core';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/sparql/sparql'

import { EndpointService } from '../controller/endpoint.service';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndpointComponent implements OnInit {

  constructor(
    private endpointService : EndpointService
  ) { }

  result: any;
  result2: any = {
    s: ["time", "date", "hour", "day", "month"],
    p: ["class", "class", "class", "class", "class"]
  };
  queryKeys = Object.keys;
  isValid: boolean;
  query: string;

  ngOnInit() {
  }

  search() {
    console.log(this.query);
    this.endpointService.search(this.query).subscribe( data => {
      this.result = data;
      this.isValid = true;
    });
  }

  clear() {
    this.query = "";
    this.result = {};
    this.isValid = false;
  }

}
