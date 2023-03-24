import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  users: Observable<Object> | undefined;

  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.users = this.httpService.getUsers();
  }
}
