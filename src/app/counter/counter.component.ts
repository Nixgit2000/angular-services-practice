import { Component } from '@angular/core';
import { InjectionService } from '../counter.service';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>
  `
})
export class CounterComponent {
  constructor(private countService: InjectionService) { }

  get counter() {
    return this.countService.counter;
  }
}