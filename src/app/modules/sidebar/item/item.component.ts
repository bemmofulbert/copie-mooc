import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { SidebarComponent } from '../sidebar.component';
import { Item } from './item.model';
import { Input } from '@angular/core';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

@Injectable({providedIn: SidebarComponent})
export class ItemComponent {
  @Input() public item:Item = new Item();
}
