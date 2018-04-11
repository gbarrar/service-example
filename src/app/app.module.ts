import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PetitionsModule } from './modules/peticiones/peticiones.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PetitionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
