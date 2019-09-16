import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, ACCOUNT_JPA_API_URL } from 'src/app/app.constants';
import { Transaction } from '../list-accounts/list-accounts.component';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllAccounts() {
    return this.http.get<Account[]>(`${ACCOUNT_JPA_API_URL}/accounts/`);
  }

  retrieveAllTransactions(accountNumber) {
    return this.http.get<Transaction[]>(`${ACCOUNT_JPA_API_URL}/accounts/${accountNumber}/transactions`);
  }

  deleteAccount(accountNumber) {
    return this.http.delete(`${ACCOUNT_JPA_API_URL}/accounts/${accountNumber}`);
  }

  // retrieveTodo(username, id) {
  //   return this.http.get<Account>(`${ACCOUNT_JPA_API_URL}/accounts/${username}/todos/${id}`);
  // }

  // updateTodo(username, id, todo) {
  //   return this.http.put(`${ACCOUNT_JPA_API_URL}/accounts/${username}/todos/${id}`, todo);
  // }


  // createTodo(username, todo) {
  //   return this.http.post(`${ACCOUNT_JPA_API_URL}/accounts/${username}/todos/`, todo);
  // }
}
