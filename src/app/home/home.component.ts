import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private recipeService: RecipeService
  ) { }
  myVar = 'ips'
  recipe: Recipe;

  recipes: Recipe[];
  
  ngOnInit() {
    this.recipe = {
      title: 'Pastel azteca!',
      href: 'http://github.com',
      ingredients: '',
      thumbnail: ''
    }

    this.recipes = this.recipeService.getRecipes();

    // this.recipeService.getAPIRecipes().subscribe(
    //   (data) => { console.log(data); }
    // );
  }

  search(value) {
    console.log(value)
  }

}
