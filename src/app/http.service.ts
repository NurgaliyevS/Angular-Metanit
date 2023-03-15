import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class HttpService {
  errorMessage: string = '';
  constructor(private http: HttpClient) {}

  // getSum(num1: number, num2: number){
  //     return this.http.get('http://localhost:3000/sum/?num1=' + num1 + "&num2=" + num2);
  // }

  getSum(num1: number, num2: number) {
    const params = new HttpParams()
      .set('num1', num1.toString())
      .set('num2', num2.toString());
    return this.http.get('http://localhost:3000/sum', { params });
  }

  postData(user: User) {
    const body = { name: user.name, age: user.age};
    return this.http.post('http://localhost:3000/postuser', body);
  }
}
