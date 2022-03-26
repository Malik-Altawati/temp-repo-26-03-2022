import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  records = [
    {
      date:this.randomDate(new Date(2022, 0, 1), new Date()),
      transactionID: Math.floor(100000 + Math.random() * 900000),
      movementType: 'Money Transfer',
      amount: Math.floor(100 + Math.random() * 9000),
    },
    {
      date:this.randomDate(new Date(2022, 0, 1), new Date()),
      transactionID: Math.floor(100000 + Math.random() * 900000),
      movementType: 'Money Transfer',
      amount: Math.floor(100 + Math.random() * 9000),
    },
    {
      date:this.randomDate(new Date(2022, 0, 1), new Date()),
      transactionID: Math.floor(100000 + Math.random() * 900000),
      movementType: 'Money Transfer',
      amount: Math.floor(100 + Math.random() * 9000),
    },
    {
      date:this.randomDate(new Date(2022, 0, 1), new Date()),
      transactionID: Math.floor(100000 + Math.random() * 900000),
      movementType: 'Money Transfer',
      amount: Math.floor(100 + Math.random() * 9000),
    },
    {
      date:this.randomDate(new Date(2022, 0, 1), new Date()),
      transactionID: Math.floor(100000 + Math.random() * 900000),
      movementType: 'Money Transfer',
      amount: Math.floor(100 + Math.random() * 9000),
    },
    {
      date:this.randomDate(new Date(2022, 0, 1), new Date()),
      transactionID: Math.floor(100000 + Math.random() * 900000),
      movementType: 'Money Transfer',
      amount: Math.floor(100 + Math.random() * 9000),
    }
  ]

  padTo2Digits(num: any) {
    return num.toString().padStart(2, '0');
  }
  
  formatDate(date:any) {
    return [
      date.getFullYear(),
      this.padTo2Digits(date.getMonth() + 1),
      this.padTo2Digits(date.getDate()),
    ].join('/');
  }
  randomDate(start:any, end:any) {
    return this.formatDate(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())));
  }
  constructor() { 
  }

  getRecords(){
    return this.records
  }
}
