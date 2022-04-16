import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedDataService {
  public editDataDetails: any = [];
  private messageSource = new BehaviorSubject(this.editDataDetails);

  // this line for make currentMessage as Observable;
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  // this function is use for change data value ;
  changeMessage(message: any) {
    this.editDataDetails.push(message);
    this.messageSource.next(this.editDataDetails)
  }
}
