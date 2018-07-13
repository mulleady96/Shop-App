import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  //ingredientsChanged = new EventEmitter<Ingredient[]>();
  // Better to use the Subject class
  ingredientsChanged = new Subject<Ingredient[]>();


  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ];


  getIngredients() {
    return this.ingredients.slice(); // returns a copy of the array.
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice()); // informs components of most recent array. use .next with subject instead of .emit with EventEmitter.
  }

  addIngredients(ingredients: Ingredient[]) {
    // Using the spread operator ... to add an array of items/ingredients of a recipe to an existing array.
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }


}
