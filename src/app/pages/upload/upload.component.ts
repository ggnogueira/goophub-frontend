import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public isComplexCollapsed = false;
  public isAtomicCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
