import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'another-child',
  templateUrl: './another-child.component.html',
  styleUrls: ['./another-child.component.css'],
})
export class AnotherChildComponent {
  @Input() userName: string = '';
  @Output() userNameChange = new EventEmitter<string>();

  onNameChange(model: string) {
    this.userName = model;
    this.userNameChange.emit(model);
  }
}
