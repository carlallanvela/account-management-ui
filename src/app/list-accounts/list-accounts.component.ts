import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountDataService } from '../service/AccountDataService';

export class Account {
  constructor(
    public accountNumber: number,
    public accountName: string,
    public accountType: string,
    public balanceDate: Date,
    public currency: string,
    public openingAvailableBalance
  ) {}
}

export class Transaction {
  constructor(
    public accountNumber: number,
    public accountName: string,
    public valueDate: Date,
    public currency: string,
    public debitAmount: number,
    public creditAmount: number,
    public debitCredit: string,
    public transactionNarrative: string
  ) {}
}

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {
  accounts = [];
  transactions = [];
  message: string;

  constructor(
    private accountService: AccountDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshAccounts();
  }

  refreshAccounts() {
    this.accountService.retrieveAllAccounts().subscribe(
      response => {
        console.log(response);
        this.accounts = response;
      }
    );
  }

  showTransactions(accountNumber, accountName, currency) {
    this.router.navigate(['list-transactions', accountNumber, accountName, currency]);
  }

  addAccount() {
    this.router.navigate(['add-account', -1]);
  }

  updateAccount(accountNumber) {
    this.router.navigate(['add-account', accountNumber]);
  }

  deleteAccount(accountNumber) {
    this.accountService.deleteAccount(accountNumber).subscribe(
      response => {
        console.log(`delete account ${accountNumber}`);
        this.message = `Delete of Account ${accountNumber} Successful!`;
        this.refreshAccounts();
      }
    )
  }

}
