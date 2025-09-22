import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-if',
  imports: [],
  templateUrl: './directive-if.html',
  styleUrl: './directive-if.css'
})
export class DirectiveIf {
  displayText: boolean = false;

  user = {
    name: "John",
    age: 30
  }

}
