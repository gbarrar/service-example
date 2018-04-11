import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css'],
  providers: [PeticionesService]
})
export class PeticionesComponent implements OnInit {

  public petitions: any;

  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this._peticionesService.getArticulos().subscribe(
      result => {
        this.petitions = result;
      },
      error => {
        console.log(error);
      }
    );
  }

}
