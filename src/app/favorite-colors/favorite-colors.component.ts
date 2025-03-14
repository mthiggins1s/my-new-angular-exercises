import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorite-colors',
  imports: [NgFor, FormsModule],
  templateUrl: './favorite-colors.component.html',
  styleUrl: './favorite-colors.component.css'
})
export class FavoriteColorsComponent {
  ColorList: string[] = [];

  newColor = '';

  addColor(color:string) {
    this.ColorList.push(color)
  }
}
