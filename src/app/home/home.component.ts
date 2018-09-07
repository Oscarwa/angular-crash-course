import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../recipe.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private router: Router
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

  view(user) {
    console.log(user);
    this.userService.currentUser = user;
    // [routerLink]="['/details', user.id]"
    this.router.navigate(['/details', user.id]);
  }

}
