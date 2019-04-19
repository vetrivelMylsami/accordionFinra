import { Component } from '@angular/core';
import { AccordionSectionComponent } from './accordion-section/accordion-section.component';

@Component({
  selector: 'accordion',
  template: `<ng-content></ng-content>`,
  providers: []
})
export class AccordionComponent {

  sections = new Array<{
    section: AccordionSectionComponent,
    Title: String
  }>();

  constructor() { }

  ngOnInit() { }

  /*all Accordion sections are registered by calling 'addSection' method from accordion-section.component.ts */
  addSection(accordionSection: AccordionSectionComponent, title: String) {
    let accordion = { section: accordionSection, Title: title }
    this.sections.push(accordion);
  }

  closeOtherSections(openSection: AccordionSectionComponent) {
    this.sections.forEach(accordion => {
      if (accordion.section !== openSection) {
        accordion.section.isOpen = false;
      }
    });
  }

}
