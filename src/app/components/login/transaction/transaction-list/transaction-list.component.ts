import { Component } from '@angular/core';
import { TransactionService } from '../../../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {
  transactions: any[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
   this.getList();
  }

  getList(){
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }
}

