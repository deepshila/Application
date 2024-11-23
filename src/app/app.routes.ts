import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TransactionAddComponent } from './components/login/transaction/transaction-add/transaction-add.component';
import { TransactionListComponent } from './components/login/transaction/transaction-list/transaction-list.component';

export const routes: Routes = [
    {'path': '', component: LoginComponent},
    {'path': 'add-transaction', component: TransactionAddComponent},
    {'path': 'list-transaction', component: TransactionListComponent}
];
