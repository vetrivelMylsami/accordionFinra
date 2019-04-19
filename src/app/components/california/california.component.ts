import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app/app.component';

@Component({
  selector: 'app-california',
  templateUrl: './california.component.html',
  styleUrls: ['./california.component.css']
})
export class CaliforniaComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.app.californiaAccordionOpen.subscribe(() => {
      //some business logic can be executed when section opens
      console.log('California Accordion is open now')
    })
    this.app.californiaAccordionClose.subscribe(() => {
      //some business logic can be executed when section closes
      console.log('California Accordion is closed now')
    })
  }

}
