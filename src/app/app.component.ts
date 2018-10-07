import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipesFront';

  constructor(private http:HttpClientModule){

  }

  ngOnInit(){
    //let obs = this.http.get('');
  }
}
