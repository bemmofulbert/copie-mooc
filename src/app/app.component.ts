import { Component } from '@angular/core';
import { NewsComponent } from './news/news.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0
  constructor (private news: NewsComponent) {}
  compter = () => {this.count = this.news.compter(this.count);}
  title = 'App_test';
}
