import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @Input()parentData :string;

  // @Output() public sendData = new EventEmitter<string>();


  constructor() {

  }

  ngOnInit(): void {
    // this.sendData.emit('Child data');
  }

}
