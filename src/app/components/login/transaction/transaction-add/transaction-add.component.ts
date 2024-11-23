import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransactionService } from '../../../../services/transaction.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transaction-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './transaction-add.component.html',
  styleUrl: './transaction-add.component.scss'
})
export class TransactionAddComponent {
  transactionForm: FormGroup;

  constructor(private fb: FormBuilder, private transactionService: TransactionService,  private router: Router) {
    this.transactionForm = this.fb.group({
      id: ['', Validators.required],
      createdDate: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      lastModifiedDate: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      remarks: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const newTransaction = this.transactionForm.value;

      this.transactionService.addTransaction(newTransaction).subscribe(() => {
        this.router.navigate(['/list-transaction']); 
      });
    } else {
      this.transactionForm.markAllAsTouched();
    }
  }
  
}


