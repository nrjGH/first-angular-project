import { Component } from '@angular/core';

@Component({
  selector: 'app-tshirt-customizer',
  templateUrl: './tshirt-customizer.component.html',
  styleUrls: ['./tshirt-customizer.component.css']
})
export class TshirtCustomizerComponent {
  tshirtColor: string = '#ffffff'; // Default white
  printImage: string | null = null;

  changeColor(color: string) {
    this.tshirtColor = color;
  }

  async generateImage(prompt: string) {
    // TODO: Implement DALL-E API call
    // For now, we'll use a placeholder
    this.printImage = 'https://placeholder.com/150';
  }
}