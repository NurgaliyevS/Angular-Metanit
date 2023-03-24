import { Component } from '@angular/core';

export class Item {
  constructor(public id: number, public product: string, public price: number) {}
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  x: number = 15.45;

  users = ["Tom", "Alice", "Sam", "Kate", "Bob"];
}
