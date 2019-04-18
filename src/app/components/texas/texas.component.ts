import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-texas',
  templateUrl: './texas.component.html',
  styleUrls: ['./texas.component.css']
})
export class TexasComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.app.texasAccordionOpen.subscribe(() => {
      //some business logic can be executed when section opens
      console.log('Texas Accordion is open now')
    })
    this.app.texasAccordionClose.subscribe(() => {
      //some business logic can be executed when section closes
      console.log('Texas Accordion is closed now')
    })
  }

}
