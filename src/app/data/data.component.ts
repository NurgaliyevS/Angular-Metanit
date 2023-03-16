import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent {
  id: number | undefined;
  product: any;
  price: number | undefined;

  private routeSbscription: Subscription;
  private querySubcription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.routeSbscription = route.params.subscribe(
      (params) => (this.id = params['id'])
    );
    this.querySubcription = route.params.subscribe((queryParam: any) => {
      this.product = queryParam['product'];
      this.price = queryParam['price'];
    });
  }
}
