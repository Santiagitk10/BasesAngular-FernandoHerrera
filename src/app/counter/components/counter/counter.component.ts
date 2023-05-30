import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  //Solo utilizar este template en línea cuando sean menos de 4 líneas
  //Los backticks me permiten hacer múltiples líneas
  template: `
    <p>Counter: {{counter}}</p>
    <button (click)="increaseCounterBy(10)">+10</button>
    <button (click)="decreaseCounterBy(15)">-15</button>
    <button (click)="reset()">Reset</button>
  `
})
export class CounterComponent {
  public counter: number = 10;

  increaseCounterBy(value:number): void{
    this.counter += value;
  }

  decreaseCounterBy(value:number): void{
    this.counter -= value;
  }

  reset(): void {
    this.counter = 10;
  }
}


