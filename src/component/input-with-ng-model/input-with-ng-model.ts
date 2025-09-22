import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-with-ng-model',
  imports: [FormsModule],
  templateUrl: './input-with-ng-model.html',
  styleUrl: './input-with-ng-model.css'
})
export class InputWithNgModel {
  inputValue: string = "Ma valeur initiale";

  checkBoxValue: boolean = false;

  resetInput() {
    this.inputValue = "";
  }

  handleChange(InputValue: string) {
    console.log(InputValue)
  }

}
