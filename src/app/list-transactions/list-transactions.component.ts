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
  message = '';
  transactions = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountDataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.accountNumber = this.route.snapshot.params.accountNumber;
    this.accountName = this.route.snapshot.params.accountName;
    this.currency = this.route.snapshot.params.currency;
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

  deleteTransaction(accountNumber, transactionId) {
    this.accountService.deleteTransaction(accountNumber, transactionId).subscribe(
      response => {
        console.log(`delete transaction ${transactionId}`);
        this.message = `Delete of Transaction ${transactionId} Successful!`;
        this.refreshTransactionsForAccount();
      }
    );
  }

  addTransaction(accountNumber) {
    this.router.navigate(['add-transaction', accountNumber, -1]);
  }

  updateTransaction(accountNumber, transactionId) {
    this.router.navigate(['add-transaction', accountNumber, transactionId]);
  }

  goBack() {
    this.location.back();
  }
}
