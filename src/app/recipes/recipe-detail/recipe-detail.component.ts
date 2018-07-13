import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(public recipeService: RecipeService, public route: ActivatedRoute, public router: Router) {

   }

  ngOnInit() {
    //const id = this.route.snapshot.params['id']; // Only works the first time we load the RecipeDetailComponent.
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']; // Adding a + operator to cast the string id to a number.
      this.recipe = this.recipeService.getRecipe(this.id);
  });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    // ALternative way of routing. ¬
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
