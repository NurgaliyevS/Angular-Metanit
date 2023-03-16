import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';

// FIRST WAY TO DYNAMIC URL
// @Component({
//   selector: 'item',
//   templateUrl: './item.component.html',
//   styleUrls: ['./item.component.css'],
// })
// export class ItemComponent {
//   id: number | undefined;
//   private subcription: Subscription;

//   constructor(private activateRoute: ActivatedRoute) {
//     // this.id = activateRoute.snapshot.params['id'];
//     this.subcription = activateRoute.params.subscribe(
//       (params) => (this.id = params['id'])
//     );
//   }
// }

// SECOND WAY TO DYNAMIC URL
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  id: number | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap(params => params.getAll('id')))
      .subscribe((data) => (this.id = Number(data)));
  }
}
