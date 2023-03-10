import { Component } from '@angular/core';
import { InjectionService } from '../counter.service';

@Component({
  selector: 'app-increment-button',
  template: `
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
  `
})
export class IncrementButtonComponent {
  constructor(private countService: InjectionService) { }

  increment() {
    this.countService.increment();
  }

  decrement() {
    this.countService.decrement();
  }
}