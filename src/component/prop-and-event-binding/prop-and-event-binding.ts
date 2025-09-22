import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-and-event-binding',
  imports: [],
  templateUrl: './prop-and-event-binding.html',
  styleUrl: './prop-and-event-binding.css'
})
export class PropAndEventBinding {

  imageSrc: string = "favicon.ico"

  buttonDesabled: boolean = true

  handleClick() {
    this.buttonDesabled = !this.buttonDesabled
    alert("J'ai cliqué !")
  }

}
