import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finra';
  
  texasAccordionClose = new Subject();
  arizonaAccordionClose = new Subject();
  floridaAccordionClose = new Subject();
  californiaAccordionClose = new Subject();
  
  texasAccordionOpen = new Subject();
  arizonaAccordionOpen = new Subject();
  floridaAccordionOpen = new Subject();
  californiaAccordionOpen = new Subject();

  constructor() {
  }

}
