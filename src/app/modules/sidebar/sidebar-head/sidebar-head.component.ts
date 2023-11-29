import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { SidebarComponent } from '../sidebar.component';

@Component({
  selector: 'app-sidebar-head',
  templateUrl: './sidebar-head.component.html',
  styleUrls: ['./sidebar-head.component.css']
})

@Injectable({providedIn: SidebarComponent})
export class SidebarHeadComponent {

}
