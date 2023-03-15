import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpService } from './http.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [HttpService],
})
export class AppComponent {
  user: User = new User('', 0);

  receivedUser: User | undefined;
  done: boolean = false;

  constructor(private httpService: HttpService) {}

  submit(user: User) {
    this.httpService.postData(user).subscribe({
      next: (data: any) => {
        this.receivedUser = data;
        this.done = true;
      },
      error: (error) => console.log(error),
    });
  }
}
