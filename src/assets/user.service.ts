import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
// import "rxjs/add/operator/catch";
// import "rxjs/add/operator/throw";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpclient: HttpClient) { }

  getUsers() {
    return this.httpclient.get("https://jsonplaceholder.typicode.com/users").pipe(
      retry(1),
      catchError((err)=>{
        console.log('error caught')
        console.log(err.message);
        return err;
      })
    );

  }

  // handleError(error) {
  //   let errormessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     errormessage = Error : ${ error.error.message }
  //   } else {
  //     errormessage = Error  : ${ error.status };

  //   }
  //   window.alert(errormessage);
  //   return throwError(errormessage);
  // }


  // getAllusers(){
  //   return [
  //     {id:101,name:'john',city:'delhi',salary:12345,dob:new Date("02/03/2001")},
  //     {id:102,name:'khan',city:'hyderabad',salary:345,dob:new Date("03/03/2001")},
  //     {id:103,name:'sher',city:'bangalore',salary:12345555,dob:new Date("04/03/2001")},
  //     {id:104,name:'raju',city:'chennai',salary:123451234,dob:new Date("05/03/2001")},

  //   ]
  // }
}

