import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDataService } from '../service/AccountDataService';
import {Location} from '@angular/common';
import { Transaction, Account } from '../list-accounts/list-accounts.component';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  accountNumber: number;
  accountName: string;
  currency: string;
  transactionId: number;
  transaction: Transaction;
  account: Account;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private accountService: AccountDataService
  ) { }

  ngOnInit() {
    this.accountNumber = this.route.snapshot.params.accountNumber;
    this.transactionId = this.route.snapshot.params.transactionId;

    // Retrieve Account
    this.accountService.retrieveAccount(this.accountNumber)
    .subscribe(
      accountData => this.account = accountData
    );

    this.transaction = new Transaction(
      this.accountNumber,
      '', new Date(), '', 0, 0, '', '');
    if (this.transactionId != -1) {
      this.accountService.retrieveTransaction(this.accountNumber, this.transactionId)
      .subscribe(
        transactionData => this.transaction = transactionData
      );
    }
  }

  saveTransaction() {
    this.accountService.createTransaction(this.accountNumber, this.transaction)
    .subscribe(
      data => {
        this.router.navigate([
          'list-transactions',
          this.accountNumber,
          this.account.accountName,
          this.account.currency
        ]);
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
