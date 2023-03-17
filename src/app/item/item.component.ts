import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  id: number | undefined;
  product: string | undefined;
  price: number | undefined;

  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);


    this.querySubscription = route.queryParams.subscribe(params => {
      this.price = params['price'];
      this.product = params['product'];
    });
  }
}
