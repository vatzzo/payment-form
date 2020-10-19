import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fullName = '';
  dateNormal = '';
  price = '';
  creditCardNumber = '';
  expiryDate = '';
  cvcNumber = '';

  onNameChange(value: string) {
    this.fullName = value;
  }

  onDateChange(value: string) {
    this.dateNormal = value;
  }

  onAmountChange(value: string) {
    this.price = value;
  }

  onCreditChange(value: string) {
    this.creditCardNumber = value;
  }
  
  onExdateChange(value: string) {
    this.expiryDate = value;
  }

  onCVCChange(value: string) {
    this.cvcNumber = value;
  }
}
