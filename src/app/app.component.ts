import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  recipes: Recipe[] = [
    new Recipe('Chocolate Chip Cookies', 'chocolate chips, flour, baking powder', 'bake at 350 degrees'),
    new Recipe('Fried Rice', 'rice, meat, eggs, soy sauce', 'whip it stir fry')
  ];

  addRecipe(name, ingredients, directions) {
    let newRecipe = new Recipe(name, ingredients, directions);
    this.recipes.unshift(newRecipe);
  }
}

