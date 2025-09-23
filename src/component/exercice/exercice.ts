import { Component } from '@angular/core';
import { ProductsList } from "../products-list/products-list";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercice',
  imports: [ProductsList, FormsModule],
  templateUrl: './exercice.html',
  styleUrl: './exercice.css'
})
export class Exercice {
  produits: any[] = [
    { id: 1, nom: 'Pomme', quantite: 0, type: 'fruit', prix: 1.2 },
    { id: 2, nom: 'Banane', quantite: 6, type: 'fruit', prix: 0.9 },
    { id: 3, nom: 'Orange', quantite: 8, type: 'fruit', prix: 1.5 },
    { id: 4, nom: 'Fraise', quantite: 20, type: 'fruit', prix: 2.5 },
    { id: 5, nom: 'Carotte', quantite: 0, type: 'legume', prix: 0.8 },
    { id: 6, nom: 'Tomate', quantite: 12, type: 'legume', prix: 1.0 },
    { id: 7, nom: 'Poivron', quantite: 5, type: 'legume', prix: 1.3 },
    { id: 8, nom: 'Brocoli', quantite: 0, type: 'legume', prix: 1.8 }
  ];

  // Pour trier .filter()
  // fruits = this.produits.filter(p => p.type === 'fruit')
  // legumes = this.produits.filter((p) => p.type === 'legume')
  fruits: any[] = this.produits.filter(p => p.type === 'fruit')
  legumes: any[] = this.produits.filter((p) => p.type === 'legume')

  checkboxValue: boolean = false // bind avec ma checkbox
  handleChange(horsStock: boolean) {
    this.fruits = this.produits.filter(p => {
      if (horsStock) {
        return p.type === 'fruit'
      } else {
        return p.type === 'fruit' && p.quantite > 0
      }
    })

    this.legumes = this.produits.filter(p => {
      if (horsStock) {
        return p.type === "legume"
      } else {
        return p.type === "legume" && p.quantite > 0
      }
    })


    // if (!horsStock) {
    //   this.fruits = this.produits.filter(p => p.quantite > 0)
    //   this.legumes = this.legumes.filter(p => p.quantite > 0)
    // }
  }

}
