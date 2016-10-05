import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [];
	@Output() recipeSelected = new EventEmitter<Recipe>();
	recipe = new Recipe('Dummy', 'Dummy', 'https://mancavemovies.files.wordpress.com/2013/05/pulpfiction.jpg?w=497');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
	  this.recipeSelected.emit(recipe);
  }

}
