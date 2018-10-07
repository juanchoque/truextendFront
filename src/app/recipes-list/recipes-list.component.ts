import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Recipes } from '../model/recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  public recipes = [];

  constructor(private _repesService:RecipesService) { }

  ngOnInit() {
    this._repesService.getRecipes()
                  .subscribe(data => this.recipes = data);
  }

}
