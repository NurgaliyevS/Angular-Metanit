import { Component } from '@angular/core';
export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: string
  ) {}
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [`
  input.ng-touched.ng-invalid {border:solid red 2px;}
  input.ng-touched.ng-valid {border:solid green 2px;}
`]
})
export class AppComponent {
  user: User = new User('', '', '');
  addUser(){
    console.log(this.user);
  }
}
