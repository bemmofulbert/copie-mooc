import { Component } from '@angular/core';
import { Item } from './item/item.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  items = [
    new Item('assets/img_side_item/house.svg', "Accueil", true),
    new Item('assets/vignettes/paperclip.svg',"Mes Ressources"),
    new Item('assets/vignettes/paper.svg',"Mon attestation"),
    new Item('assets/vignettes/profil.svg',"Mon Profil")
  ]
}
