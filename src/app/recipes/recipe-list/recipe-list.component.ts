import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] =[
  new Recipe('A test recipe','this is my first recipe',
  'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/04/27/FN_FNK_Air-Fryer-Steak-With-Garlic-Herb-Butter_s4x3.jpg.rend.hgtvcom.966.725.suffix/1588019651595.jpeg'),
  new Recipe('A test recipe','this is my first recipe',
  'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/04/27/FN_FNK_Air-Fryer-Steak-With-Garlic-Herb-Butter_s4x3.jpg.rend.hgtvcom.966.725.suffix/1588019651595.jpeg')
];


  constructor() { }

  ngOnInit(): void {
  }

}
