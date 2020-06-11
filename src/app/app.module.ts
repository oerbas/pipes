import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConvertPipe } from './convert.pipe';
import { ConvertRemPipe } from './convert-rem.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertPipe,
    ConvertRemPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
