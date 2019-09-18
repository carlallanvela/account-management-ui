import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ACCOUNT_JPA_API_URL, AWS_ACCOUNT_JPA_API_URL } from 'src/app/app.constants';
import { Transaction, Account } from '../list-accounts/list-accounts.component';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllAccounts() {
    return this.http.get<Account[]>(`${AWS_ACCOUNT_JPA_API_URL}/accounts/`);
  }

  retrieveAccount(accountNumber) {
    console.log('Retrieving Account...');
    return this.http.get<Account>(`${AWS_ACCOUNT_JPA_API_URL}/accounts/${accountNumber}`);
  }

  retrieveTransaction(accountNumber, transactionId) {
    return this.http.get<Transaction>(`${AWS_ACCOUNT_JPA_API_URL}/accounts/${accountNumber}/transactions/${transactionId}`);
  }

  retrieveAllTransactions(accountNumber) {
    return this.http.get<Transaction[]>(`${AWS_ACCOUNT_JPA_API_URL}/accounts/${accountNumber}/transactions`);
  }

  createAccount(account) {
    return this.http.post(`${AWS_ACCOUNT_JPA_API_URL}/accounts/`, account);
  }

  createTransaction(accountNumber, transaction) {
    return this.http.post(`${AWS_ACCOUNT_JPA_API_URL}/accounts/${accountNumber}/transactions/`, transaction);
  }

  deleteAccount(accountNumber) {
    return this.http.delete(`${AWS_ACCOUNT_JPA_API_URL}/accounts/${accountNumber}`);
  }

  deleteTransaction(accountNumber, transactionNumber) {
    return this.http.delete(`${AWS_ACCOUNT_JPA_API_URL}/accounts/${accountNumber}/transactions/${transactionNumber}`);
  }
}
