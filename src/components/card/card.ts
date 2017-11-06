import { Input, Component } from '@angular/core';

@Component({
      selector: 'card',
      templateUrl: 'card.html'
})
export class CardComponent {
      @Input() cardholderName;
      @Input() cardNumber;
      @Input() redactedCardNumber;
      @Input() expiryMonth;
      @Input() expiryYear;
      @Input() cvv;
      @Input() postalCode;
      @Input() cardType;
      @Input() index;

      constructor() {
            console.log('Hello CardComponent Component');
      }
}
