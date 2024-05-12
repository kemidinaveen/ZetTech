import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { NotifierService } from '../notifier.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {

  constructor(private dataservice:DataService,private router:Router,private notifierservice:NotifierService) { }
dataGrocery:any;
quantityvalue:number;
userchecked:number=this.dataservice.groceryItemsAll[0].id;
// userchecked:number=0;
groceryitem:any;

  ngOnInit(): void {
    this.dataGrocery=this.dataservice.groceryItemsAll;
  }



  addtoOrderDetails(){
    // this.userchecked;
    this.notifierservice.postNotifiedValue(this.userchecked);
  }

}
  