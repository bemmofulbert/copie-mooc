import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { SidebarComponent } from '../sidebar.component';

@Component({
  selector: 'app-sidebar-foot',
  templateUrl: './sidebar-foot.component.html',
  styleUrls: ['./sidebar-foot.component.css']
})

@Injectable({providedIn: SidebarComponent})
export class SidebarFootComponent {

}
