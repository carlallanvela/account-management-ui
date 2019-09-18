import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTransactionsComponent } from './list-transactions/list-transactions.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

// Web Application Routes
const routes: Routes = [
  { path: '', component: ListAccountsComponent},
  { path: 'list-transactions/:accountNumber/:accountName/:currency', component: ListTransactionsComponent },
  { path: 'add-account/:accountNumber', component: AddAccountComponent},
  { path: 'add-transaction/:accountNumber/:transactionId', component: AddTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
