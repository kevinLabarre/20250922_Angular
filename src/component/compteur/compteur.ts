import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  imports: [],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css'
})
export class Compteur {

  count: number = 0;

  // Coder les fonctions

  increment() {
    // this.count = this.count + 1
    this.count += 1
    // this.count++
  }

  decrement() {
    // this.count = this.count + 1
    this.count -= 1
    // this.count--
  }
  reset() {
    this.count = 0
  }

}
