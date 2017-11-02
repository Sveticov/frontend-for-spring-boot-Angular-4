import {Component} from '@angular/core';

import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spring boot angular';
  myAnsver: string;
  myAnswer2:string;

  constructor(private http: HttpClient) {
  }

  onFunction(): void {
    this.http.get('/ang', {responseType: 'text'}).subscribe(data => this.myAnsver=data);
  }
  onFunction2():void{
    this.http.get('/cont',{responseType: 'text'})
      .subscribe(data=>this.myAnswer2=data);
  }

  onClear():void{
    this.myAnswer2='';
    this.myAnsver='';
  }
}
