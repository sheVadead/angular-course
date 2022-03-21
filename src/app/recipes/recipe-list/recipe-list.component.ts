import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('A test RP', 'This is a test desc', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Beef-Bolognese-with-Linguine_EXPS_FT21_130403_F_0423_1.jpg?fit=700,1024')];
  constructor() { }

  ngOnInit(): void {
  }

}
