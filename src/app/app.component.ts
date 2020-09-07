import { Component } from '@angular/core';

import { faCoffee, faHome, faSearch, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goop-app';

  // Icons
  faCoffee = faCoffee;
  faHome = faHome;
  faSearch = faSearch;
  faArrowAlCircleDown = faArrowAltCircleDown;
}
