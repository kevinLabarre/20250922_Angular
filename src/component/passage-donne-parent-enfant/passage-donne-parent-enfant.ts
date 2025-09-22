import { Component } from '@angular/core';
import { ComposantEnfant } from "../composant-enfant/composant-enfant";

@Component({
  selector: 'app-passage-donne-parent-enfant',
  imports: [ComposantEnfant],
  templateUrl: './passage-donne-parent-enfant.html',
  styleUrl: './passage-donne-parent-enfant.css'
})
export class PassageDonneParentEnfant {
  parentText: string = "Donnée présente dans le composant parent"
}
