import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-aboutuser',
  templateUrl: './aboutuser.component.html',
  styleUrls: ['./aboutuser.component.scss']
})
export class AboutuserComponent implements OnInit {
userName:FormControl=new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

}
