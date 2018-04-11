import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

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
