import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTransactionsComponent } from './list-transactions/list-transactions.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';

// Web Application Routes
const routes: Routes = [
  { path: '', component: ListAccountsComponent},
  { path: 'list-transactions/:accountNumber/:accountName/:currency', component: ListTransactionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
