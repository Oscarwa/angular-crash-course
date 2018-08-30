import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../recipe.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private recipeService: RecipeService,
    private userService: UserService
  ) { }
  //myVar = 'ips'
  //recipe: Recipe;

  //recipes: Recipe[];
  users: any[] = [];
  searchTerm: string = '';
  
  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data.data);
      this.users = data.data;
    })
  }

  search(value) {
    console.log(value)
  }

}
