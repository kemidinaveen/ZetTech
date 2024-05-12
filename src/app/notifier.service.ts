import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotifierService {
  notifyvalue: Subject<number> = new Subject<number>();
  constructor() { }


  postNotifiedValue(data: number) {
    this.notifyvalue.next(data);
  } 
}
