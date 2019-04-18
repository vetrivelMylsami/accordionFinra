import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-florida',
  templateUrl: './florida.component.html',
  styleUrls: ['./florida.component.css']
})
export class FloridaComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.app.floridaAccordionOpen.subscribe(() => {
      //some business logic can be executed when section opens
      console.log('Florida Accordion is open now')
    })
    this.app.floridaAccordionClose.subscribe(() => {
      //some business logic can be executed when section closes
      console.log('Florida Accordion is closed now')
    })
  }

}
