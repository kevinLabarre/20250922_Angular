import { Component, signal } from '@angular/core';
import { DirectiveIf } from "../component/directive-if/directive-if";
import { DirectiveFor } from "../component/directive-for/directive-for";
import { PropAndEventBinding } from "../component/prop-and-event-binding/prop-and-event-binding";
import { Compteur } from "../component/compteur/compteur";
import { InputWithNgModel } from "../component/input-with-ng-model/input-with-ng-model";
import { PassageDonneParentEnfant } from "../component/passage-donne-parent-enfant/passage-donne-parent-enfant";

interface User {
  name: string,
  age: number,
  city?: string, // city est 'optionnel'
  // city: string | undefined,  // Equivalent à ligne ci-dessus
}

enum AccountType {
  COURANT = "COURANT",
  EPARGNE = "EPARGNE",
  NC = "NC"
}

class UserModel {
  constructor(name: string, age: number, city?: string) {
    this.name = name;
    this.age = age;
    this.city = city
  }

  name: string;
  age: number;
  city?: string;
}


@Component({
  selector: 'app-root', // utiliser pour 'appeler' ce composant
  imports: [DirectiveIf, DirectiveFor, PropAndEventBinding, Compteur, InputWithNgModel, PassageDonneParentEnfant],
  // template: `<h1>Bienvenue !!!!!!</h1>`,  // On peut directement écrire notre HTML dans 'template' , si l'on souhaite utiliser un seul fichier
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = "Bienvenue !"

  // myNumber: number = 0;
  myNumber?: number;

  multiType: any = "Toto"

  displayTitle(): string {
    return this.title
  }

  // Les typages objets / tableaux

  myNumbers: number[] = [1, 2, 3, 4, 5, 6]

  user: { name: string, age: number } = {
    name: "Toto",
    age: 25,
    // city: "Paris"
  }

  getMyUser(): User {
    return this.user;
  }

  displayUser(): void {
    console.log(this.user);
  }

  accountType: "COURANT" | "EPARGNE" | "NC" = "COURANT"
  accountType2: AccountType = AccountType.COURANT

  user2: unknown = {
    name: "Toto",
    age: 25,
    city: "Paris"
  }

  alert(): void {
    alert("Bienvenue !");
    if (this.user2 instanceof UserModel) {
      console.log(this.user2.name)
    }
  }


}
