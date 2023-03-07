import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'data-comp',
  templateUrl: './data.component.html',
})
export class DataComponent{
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
