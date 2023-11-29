import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

const alertMes = (mes: any) => {
  alert(mes);
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

@Injectable({providedIn: 'root'})
export class NewsComponent {
  text = "hello world";
  never = false;
  always = true;
  up = alertMes;
  toggle = () => {
    this.never =!this.never;
  }
  compter = (i: number) => {
    i++;
    return i;
  }
}
