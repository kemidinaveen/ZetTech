import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  groceryItemsAll = [{
    "id": 1001,
    "title": "potato1",
    "price": 10,
    "tax": 0,
    "discount": 0,
    "flaour variation": "normal",
    "quantity": 1,
    "coke": 5,
    "water": 12,
    "sold": 8,
    "rating": 4.2,
    "description": "this is the description of the above image",
    "user": 0,
    // img:  '../../assets/images'

  },
  {
    "id": 1002,
    "title": "potato2",
    "price": 20,
    "tax": 0,
    "discount": 0,
    "flaour variation": "normal",
    "quantity": 1,
    "coke": 5,
    "water": 12,
    "sold": 8,
    "rating": 4.2,
    "description": "this is the description of the above image",
    "user": 0,
    // img:  '../../assets/images'

  },
  {
    "id": 1003,
    "title": "potato3",
    "price": 30,
    "tax": 0,
    "discount": 0,
    "flaour variation": "normal",
    "quantity": 1,
    "coke": 5,
    "water": 12,
    "sold": 8,
    "rating": 4.2,
    "description": "this is the description of the above image",
    "user": 0,
    // img:  '../../assets/images'

  },
  {
    "id": 1004,
    "title": "potato4",
    "price": 40,
    "tax": 0,
    "discount": 0,
    "flaour variation": "normal",
    "quantity": 1,
    "coke": 5,
    "water": 12,
    "sold": 8,
    "rating": 4.2,
    "description": "this is the description of the above image",
    "user": 0,
    // img:  '../../assets/images'

  },
  {
    "id": 1005,
    "title": "potato5",
    "price": 50,
    "tax": 0,
    "discount": 0,
    "flaour variation": "normal",
    "quantity": 1,
    "coke": 5,
    "water": 12,
    "sold": 8,
    "rating": 4.2,
    "description": "this is the description of the above image",
    "user": 0,
    // img:  '../../assets/images'

  },
  {
    "id": 1006,
    "title": "potato6",
    "price": 60,
    "tax": 0,
    "discount": 0,
    "flaour variation": "normal",
    "quantity": 1,
    "coke": 5,
    "water": 12,
    "sold": 8,
    "rating": 4.2,
    "description": "this is the description of the above image",
    "user": 0,
    // img:  '../../assets/images'

  }]
  
    customerDetails = [
      { id: 1, name: "aaa", phonenumber: '111' },
      { id: 2, name: "bbb", phonenumber: '222' },
      { id: 3, name: "ccc", phonenumber: '333' },
      { id: 4, name: "ddd", phonenumber: '444' },
      { id: 0, name: "walk in guy", phonenumber: '100' },

    ]
  
    getCustomerDetails():Array<Object> {
      return this.customerDetails;
    
    }

    // getData(){
    //   localStorage.setItem("getGrocery",JSON.stringify(this.groceryItemsAll))
    //   return this.groceryItemsAll=this.groceryItemsAll;
    // }
    

    getData(){
      localStorage.getItem("getGrocery")
      return this.groceryItemsAll=this.groceryItemsAll;
    }

}
