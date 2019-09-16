import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDataService } from '../service/AccountDataService';
import {Location} from '@angular/common';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent implements OnInit {

  accountNumber = '';
  accountName = ''
  currency = '';
  transactions = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountDataService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.accountNumber = this.route.snapshot.params['accountNumber'];
    this.accountName = this.route.snapshot.params['accountName'];
    this.currency = this.route.snapshot.params['currency'];
    this.refreshTransactionsForAccount();
  }

  refreshTransactionsForAccount() {
    this.accountService.retrieveAllTransactions(this.accountNumber).subscribe(
      response => {
        console.log(response);
        this.transactions = response;
      }
    );
  }

  goBack() {
    this._location.back();
  }
}
