import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectionService {
  public counter = 0;

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  constructor() { }
}