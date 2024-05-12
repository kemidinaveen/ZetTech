import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NotifierService } from '../notifier.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  constructor(private dataservice: DataService, private notifyservice: NotifierService) { }


  constructordetails: any = this.dataservice.getCustomerDetails();
  groceryItems: any;

  ngOnInit(): void {
    this.constructordetails = this.dataservice.getCustomerDetails();
    this.groceryItems = this.dataservice.getData();
    this.notifyservice.notifyvalue.subscribe((id) => {
      // alert(data);
      this.groceryItems = this.dataservice.getData().filter(d => d.id == id)
    });
  }


  deleteGroceryItem(id: number) {
    let index = this.groceryItems.findIndex(item => item.id == id);
    delete this.groceryItems[index];
  }


}
// export class customerDetails {
//   id: number;
//   name: string;
//   phonenumber: number;
// }


