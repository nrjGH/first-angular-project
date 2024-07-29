import { Component } from '@angular/core';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrl: './tshirt.component.css'
})
export class TshirtComponent {
  tshirtColor: string = '#ffffff'; // Default white
  printImage: string | null = null;

  changeColor(color: string) {
    this.tshirtColor = color;
  }
}
