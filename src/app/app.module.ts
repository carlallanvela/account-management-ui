import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { HttpClientModule } from '@angular/common/http';
import { ListTransactionsComponent } from './list-transactions/list-transactions.component';
import { AppRoutingModule } from './app-routing.module';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAccountsComponent,
    ListTransactionsComponent,
    AddAccountComponent,
    AddTransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
