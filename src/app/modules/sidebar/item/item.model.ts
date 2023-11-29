
export class Item {
    public icon:String;
    public title:String;
    public selected:Boolean;
  
    constructor(icon:String = "assets/img_side_item/house.svg",title:String="Accueil",selected:Boolean=false){
      this.icon = icon;
      this.title = title;
      this.selected = selected;
    }
  }