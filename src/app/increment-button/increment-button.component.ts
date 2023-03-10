import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-increment-button',
  template: `
    <button (click)="increment()">Increment</button>
  `
})
export class IncrementButtonComponent {
  constructor(private counterService: CounterService) { }

  increment() {
    this.counterService.increment();
  }
}