import { BrowserModule } from '@angular/platform-browser';
import { NpnSliderModule } from "npn-slider";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VisualComponent } from './visual/visual.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualComponent,
  ],
  imports: [
    BrowserModule,
    NpnSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
