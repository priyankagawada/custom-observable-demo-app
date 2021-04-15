import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { Custom1ObservableComponent } from './custom1-observable/custom1-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomObservableComponent,
    Custom1ObservableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
