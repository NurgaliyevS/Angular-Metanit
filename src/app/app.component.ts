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
  item: Item = new Item(1, '', 0);
  
  constructor(private router: Router) {};

  goHome(){
    this.router.navigate([''])
  }

  goToItem(myItem: Item) {
    this.router.navigate(['/item', myItem.id], {
      queryParams: {
        'product': myItem.product,
        'price': myItem.price
      }
    })
  }
}
