import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Item {
  constructor(public id: number, public product: string, public price: number) {}
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
}
