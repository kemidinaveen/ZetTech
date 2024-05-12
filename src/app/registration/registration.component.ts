import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder) {

  }


  RegistrationForm = new FormGroup({})
  buildForm(){
    this.RegistrationForm= this.fb.group({
      email:[null,Validators.required],
      password:[null,Validators.required]
    })
  }
  ngOnInit(): void {
this.buildForm();
  }

//   var a = document.getElementById('email').innerText;
// var b = document.getElementById('Password').innerText;
user:any = [];
onFormSubmit(){
this.user= Object.assign({},this.user,this.RegistrationForm.value)
console.log(this.user)
this.adduser(this.user)
}

adduser(user){
  let users = [];
  if(localStorage.getItem('Users')){
  users = JSON.parse(localStorage.getItem('Users'))
  users.push(user)
  }else{
    users.push(user)
  }
  localStorage.setItem('Users',JSON.stringify(users));
}


  // const jsonData = JSON.stringify(a)
  // localStorage.setItem('credentials', jsonData)



}
