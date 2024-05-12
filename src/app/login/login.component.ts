import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // loginForm = new FormGroup({
  //   email: new FormControl(' ', Validators.required),
  //   password: new FormControl(' ', Validators.required)
  // })
  constructor(private router: Router) { }


  ngOnInit(): void {
    // localStorage.clear();

    // this.setValuestoBuildForm();
    // console.log(this.loginForm.controls['email'].value);
  }



  // new FormGroup({
  //   email: new FormControl('',Validators.required),
  //   password: new FormControl('',Validators.required),
  // });



  // setValuestoBuildForm() {
  //   this.loginForm.setValue({
  //     "email": "naveenkumar@gmail.com",
  //     "password":"123456789"
  //   });
  // }



  // user :any = [];
  // onFormSubmit() {
  //   console.log(this.loginForm.value)
  //  this.user = Object.assign({},this.user,this.loginForm.value);
  //  localStorage.setItem('Users',JSON.stringify(this.user))
  // let data = {...this.loginForm.value} 
  // console.log(data + "one")
  //  this.adduser(this.user)
  // }


  // adduser(user){
  //   let users:any=[];
  //   if(localStorage.getItem('Users')){
  //      users = JSON.parse(localStorage.getItem('Users')) 

  //      console.log(users);
  //      users.push(user);
  // users=[user, ...users]; 
  // }
  //   else{
  // users=[user];
  //    users.push(user);
  // } 
  // console.log(users, "it's working");
  //   localStorage.setItem('Users',JSON.stringify(users));
  // }

  // for(var i=0,i <=localStorage.length,i++){

  //   if(localStorage.Users.email == this.loginForm.email && localStorage.password == this.loginForm.password){

  //   }
  // }

  //   submit(){
  // this.router.navigateByUrl('/home')
  //   }

  // get email(): any {
  //   return this.loginForm.get('email')
  // }
  onSubmit() {
    this.router.navigate(['/', 'home'])

    console.log("hi")

    //this.validateuser();      
  }


  // validateuserr() {
  //   var p = (<HTMLInputElement>document.getElementById('inputone')).value;
  //   console.log(p);
  // }

  validateuser() {

    var registereduser = JSON.parse(localStorage.getItem('Users'));

    for (var i = 0; i < registereduser.length; i++) {
      var userdtl = registereduser[i]      

      if (userdtl.email == (<HTMLInputElement>document.getElementById('inputone')).value) {
        console.log((<HTMLInputElement>document.getElementById('inputone')).value)
        this.router.navigate(['home'])
        }
    }



    // }

    // ischeck(): boolean {
    //   return true;
    // }
  }


}