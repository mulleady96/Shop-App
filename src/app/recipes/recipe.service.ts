import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {

  public recipes: Recipe[] = [
    new Recipe('A Pizza', 'Good Recipe Great Ingredients', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg', [
      new Ingredient('Pizza Dough', 1),
      new Ingredient('Chicken pieces', 5)
    ]),
    new Recipe('Goodfellas', 'Italian Pizza', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg', [
      new Ingredient('Pizza Dough', 1),
      new Ingredient('Cheese', 5)
    ])
  ];

  constructor(public slService: ShoppingListService){

  }


  getRecipes() {
    // getter so we can get access to this array from outside.
    return this.recipes.slice(); // returns a copy of the array data structure.
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
