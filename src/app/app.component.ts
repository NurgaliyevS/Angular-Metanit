import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [DataService]
})
export class AppComponent{
  items: string[] = [];
  name: string = "";

  constructor(private dataService: DataService){}

  addItem(name: string) {
    this.dataService.addData(name);
  }

  ngOnInit(){
    this.items = this.dataService.getData();
  }
}
