import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-composant-enfant',
  imports: [],
  templateUrl: './composant-enfant.html',
  styleUrl: './composant-enfant.css'
})
export class ComposantEnfant {
  // @Input() childText: string = "Valeur de 'text' si aucune valeur n'est passée par le parent";

  @Input({ required: true }) childText!: string;

}
