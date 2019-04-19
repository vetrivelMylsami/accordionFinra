# About project
1) Accordion component created with Accordion-section components injected like shown below:
```html
  <accordion>

    <accordion-section title="Texas" [isOpen]="true" (onClose)="texasAccordionClose.next()" (onOpen)="texasAccordionOpen.next()">
      <app-texas></app-texas>
    </accordion-section>

    <accordion-section title="Arizona" [isOpen]="false" (onClose)="arizonaAccordionClose.next()" (onOpen)="arizonaAccordionOpen.next()">
      <app-arizona></app-arizona>
    </accordion-section>

    <accordion-section title="Florida" [isOpen]="false" (onClose)="floridaAccordionClose.next()" (onOpen)="floridaAccordionOpen.next()">
      <app-florida></app-florida>
    </accordion-section>

    <accordion-section title="California" [isOpen]="false" (onClose)="californiaAccordionClose.next()" (onOpen)="californiaAccordionOpen.next()">
      <app-california></app-california>
    </accordion-section>

  </accordion>
   ```

2) 'title' must be provided to register accordion-section

3) Angular Accordion library created with the name 'Accordion-Finra-Lib', usable upon running this command:
   ```typescript 
   npm install accordion-finra-lib
    ```

4) We can open/close Accordion not only by 'click', also can 'tab to another Accordion & hit Enter-key to open/close'

5) Components or regular HTML can be used under each accordion-section

6) Accordion-section default to 'closed', input-bind the value 'true' to property 'isOpen'.

7) Accordion-section possess 'open/close' event-emitters which can be used to invoke possible use cases upon closing/opening Accordion.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
