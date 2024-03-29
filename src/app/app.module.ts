import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TexasComponent } from './components/texas/texas.component';
import { ArizonaComponent } from './components/arizona/arizona.component';
import { FloridaComponent } from './components/florida/florida.component';
import { CaliforniaComponent } from './components/california/california.component';
import { AccordionFinraLibModule } from 'accordion-finra-lib';

@NgModule({
  declarations: [
    AppComponent,
    TexasComponent,
    ArizonaComponent,
    FloridaComponent,
    CaliforniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccordionFinraLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
