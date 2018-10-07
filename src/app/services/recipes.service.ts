import { Injectable } from '@angular/core';
import { Recipes } from '../model/recipes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Accounts } from '../model/accounts';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public acounts: Accounts;

  private token:string = 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOiIxIiwiZXhwIjoxNTM4OTUzMTk5fQ.01HfZKKM2ILhRKs2Vc_cjcLMYjK1u6gEGxJBAeQ0l6wWndOM4V3Q9XyVBqtL65G-pKhFwl8brJXPxshys8QXmA';
  private url:string = 'http://localhost:8086/recipes/list';

  constructor(private http:HttpClient) { }

  getRecipes(){
    //local storage
    localStorage.setItem("token", this.token);
    console.log(localStorage.getItem("token"));

    this.acounts = new Accounts();
    const headers = new HttpHeaders().set('Authorization', this.token).set('Content-Type', 'application/json');
    const jsonBack = JSON.stringify(this.acounts);
    return this.http.post<Recipes[]>(this.url,  jsonBack, {headers: headers});
  }
}
