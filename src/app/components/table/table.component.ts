import { Component, OnInit } from '@angular/core';
import {faTrash, faEdit, faEye} from '@fortawesome/free-solid-svg-icons';
import {TransactionsService} from "../../services/transactions.service"
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  faEye = faEye;
  records : any = [];
  constructor(private TS : TransactionsService) { }

  ngOnInit(): void {
    this.records = this.TS.getRecords()
    console.log(this.records)
  }

}
