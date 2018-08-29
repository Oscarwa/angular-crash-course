import { Injectable } from '@angular/core';
import { RECIPES } from './mock-recipes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL: 'http://www.recipepuppy.com/api/';

  getRecipes() {
    return RECIPES;
  } 

  getAPIRecipes() {
    return this.http.get('http://www.recipepuppy.com/api/?q=cake');
  }
}
