import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  saved: boolean = false;
  save() {
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved) {
      return confirm(`Do you want to leave`);
    } else {
      return true;
    }
  }
}
