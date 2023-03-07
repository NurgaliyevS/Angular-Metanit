import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [
    `
      input.ng-touched.ng-invalid {
        border: solid red 2px;
      }
      input.ng-touched.ng-valid {
        border: solid green 2px;
      }
    `,
  ],
})
export class AppComponent {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      userName: new FormControl('Tom', Validators.required),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      phones: new FormArray([new FormControl('+7', Validators.required)]),
    });
  }

  getFormsControls(): FormArray {
    return this.myForm.controls['phones'] as FormArray;
  }

  addPhone() {
    (<FormArray>this.myForm.controls['phones']).push(
      new FormControl('+7', Validators.required)
    );
  }

  submit() {
    console.log(this.myForm);
  }
}
