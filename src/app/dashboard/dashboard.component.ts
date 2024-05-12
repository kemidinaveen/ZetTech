import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  foodItemsAll:Array<any> = new Array();
  foodItems:Array<any> = new Array();

  ngOnInit(): void {

    this.foodItemsAll=[
      {
        "id":1000,
        "restaurant":"Indian Restaurant",
        "rating":"4.0",
        "price":190,
        "flavor":"medium roast fry",
        "title":"Thandoori roti",
        "innertxt":"Thandoori roti",
        "number":"1",
        img: '../../assets/images/image_0002.jpg'  }
    ];
this.foodItems=JSON.parse(JSON.stringify(this.foodItemsAll));
  }

}
