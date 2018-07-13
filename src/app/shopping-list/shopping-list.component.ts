import { Component, OnInit, onDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, onDestroy {

ingredients: Ingredient[];
public subscription: Subscription;

  constructor(public slService: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => { // listen in through the use of subscribe for a change in events. this updates the array view.
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    // used to prevent Memory leaks.
  }

  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  // } // method now done in the service.

}
