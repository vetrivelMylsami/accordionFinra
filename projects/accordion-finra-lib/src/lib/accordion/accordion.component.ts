import { Component } from '@angular/core';
import { AccordionSectionComponent } from './accordion-section/accordion-section.component';

@Component({
  selector: 'accordion',
  template: `<ng-content></ng-content>`,
  providers: []
})
export class AccordionComponent {

  sections: Array<AccordionSectionComponent> = [];

  texasAccordion: AccordionSectionComponent;
  arizonaAccordion: AccordionSectionComponent;
  floridaAccordion: AccordionSectionComponent;
  californiaAccordion: AccordionSectionComponent;

  constructor() { }

  ngOnInit() { }

  /*all Accordion sections are registered by declaring accordion-section name and then assign the reference by calling 'addSection' method from accordion-section.component.ts */
  addSection(section: AccordionSectionComponent) {
    if (section.heading == 'Texas') this.texasAccordion = section;
    if (section.heading == 'Arizona') this.arizonaAccordion = section;
    if (section.heading == 'Florida') this.floridaAccordion = section;
    if (section.heading == 'California') this.californiaAccordion = section;
    this.sections.push(section);
  }

  closeOtherSections(openSection: AccordionSectionComponent) {
    this.sections.forEach((section: AccordionSectionComponent) => {
      if (section !== openSection) {
        section.isOpen = false;
      }
    });
  }

  removeSection(section: AccordionSectionComponent) {
    const index = this.sections.indexOf(section);
    if (index !== -1) {
      this.sections.splice(index, 1);
    }
  }
}
