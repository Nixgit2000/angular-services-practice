import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>
  `
})
export class CounterComponent {
  constructor(private counterService: CounterService) { }

  get counter() {
    return this.counterService.counter;
  }
}