import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { AccordionComponent } from '../accordion.component';

@Component({
  selector: 'app-accordion-section',
  templateUrl: './accordion-section.component.html',
  styleUrls: ['./accordion-section.component.css']
})
export class AccordionSectionComponent implements OnInit {

  @Input() heading: string;
  @Output() onClose = new EventEmitter();
  @Output() onOpen = new EventEmitter();

  private _isOpen: boolean = false;
  @Input()
  get isOpen(): boolean {
    return this._isOpen;
  }
  set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) this.accordion.closeOtherSections(this);
  }

  constructor(public accordion: AccordionComponent) { }

  ngOnInit() {
    this.accordion.addSection(this); //each accordion section is added to the array of sections through parent component's addSection method
  }

  toggleOpen() {
    this.accordion.sections.forEach((accordionEl) => {
      if (accordionEl.isOpen === true) accordionEl.onClose.emit(); //if accordion-section is about to get closed, 'onClose' event emitter informs its inner component
    });
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.onOpen.emit() //if accordion-section is about to get open, 'onOpen' event emitter informs its inner component to do some tasks
  }

  onClick(event: MouseEvent) {
    event.preventDefault();
    this.toggleOpen();
  }

  /* When focus is on any accordion, hitting enter-key will toggle open/close */
  onEnter(event) {
    if (event.keyCode === 13) this.toggleOpen();
  }

  ngOnDestroy() {
    this.accordion.removeSection(this);
  }
}
