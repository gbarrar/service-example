import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeticionesComponent } from './peticiones.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    PeticionesComponent
  ],
  exports: [
    PeticionesComponent
  ]
})
export class PetitionsModule { }
