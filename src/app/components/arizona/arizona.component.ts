import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-arizona',
  templateUrl: './arizona.component.html',
  styleUrls: ['./arizona.component.css']
})
export class ArizonaComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.app.arizonaAccordionOpen.subscribe(() => {
      //some business logic can be executed when section opens
      console.log('Arizona Accordion is open now')
    })
    this.app.arizonaAccordionClose.subscribe(() => {
      //some business logic can be executed when section closes
      console.log('Arizona Accordion is closed now')
    })
  }

}
