import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <another-child [(userName)]="name"></another-child>
    <div>Choosen name: {{ name }}</div>
  `,
})
export class AppComponent {
  name: string = 'Tom';
}
