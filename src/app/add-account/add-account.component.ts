import { Component, OnInit } from '@angular/core';
import { Account } from '../list-accounts/list-accounts.component';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { AccountDataService } from '../service/AccountDataService';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  accountNumber: number;
  account: Account;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private accountService: AccountDataService
  ) { }

  ngOnInit() {
    this.accountNumber = this.route.snapshot.params.accountNumber;
    this.account = new Account(this.accountNumber, '', '', new Date(), '', '');
    if (this.accountNumber != -1) {
      this.accountService.retrieveAccount(this.accountNumber)
      .subscribe(
        data => this.account = data
      );
    }
  }

  saveAccount() {
    this.accountService.createAccount(this.account)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['']);
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
