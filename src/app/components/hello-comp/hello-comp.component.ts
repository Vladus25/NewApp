import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-comp',
  templateUrl: './hello-comp.component.html',
  styleUrls: ['./hello-comp.component.css'],
})
export class HelloCompComponent {

}

@Component({
  selector: 'app-hello-comp',
  template: `
    <button (click)="mostraData()">Mostra Data</button>
    <p>Data di oggi: {{ dataOggi }}</p>
  `
})
export class HelloComp {
  dataOggi: string = '';

  mostraData() {
    this.dataOggi = new Date().toLocaleDateString();
  }
}



