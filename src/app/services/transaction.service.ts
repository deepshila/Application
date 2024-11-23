import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'assets/transactions.json';
  private transactions: any[] = [];

  constructor(private http: HttpClient) {}

  loadTransactions(): Observable<any[]> {
    if (this.transactions.length > 0) {
      return of(this.transactions);
    }
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data: any) => {
        this.transactions = data.transactions;
        return this.transactions;
      })
    );
  }

  getTransactions(): Observable<any[]> {
    return of(this.transactions);
  }

  addTransaction(transaction: any): Observable<any> {
    this.transactions.push(transaction);
    return of(transaction);
  }
}
