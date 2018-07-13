import { Ingredient } from '../shared/ingredient.model';


export class Recipe {
  // Model is just a blueprint for objects we create, this setup will depict how a recipe should look like upon creation. It should have the following attributes.

  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
