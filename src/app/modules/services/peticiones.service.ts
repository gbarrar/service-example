import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }
  getArticulos() {
    return this._http.get(this.url);
  }

}
