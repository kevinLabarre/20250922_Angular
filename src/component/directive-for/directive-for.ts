import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interface/i-user';

@Component({
  selector: 'app-directive-for',
  imports: [CommonModule],
  templateUrl: './directive-for.html',
  styleUrl: './directive-for.css'
})
export class DirectiveFor {
  users: IUser[] = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 35 },
  ]

  names: string[] = ["Riri", "Fifi", "Loulou", "Riri", "Fifi"]
}
