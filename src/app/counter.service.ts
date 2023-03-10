import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public counter = 0;

  increment() {
    this.counter++;
  }
  
  constructor() { }
}