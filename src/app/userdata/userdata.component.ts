import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit {

  users :any;
  constructor() { }


  ngOnInit(): void {
// this.users=this.userservice.getAllusers();
// this.userservice.getUsers().subscribe((data)=>{
//   this.users = data;
// });
  }

   win() {
    console.log("hi")
  }
//   var delay = '';
// function displayMessage(){
// 	delay = setTimeout(()=>{
// 	document.getElementById('output').innerHTML = "This is set timeout method";
// 	},2000)
// }
  


//   delay =setTimeout(() => {
//     console.log('hi');
//   }, 5000);




}
