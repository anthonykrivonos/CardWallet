import { Input, Component } from '@angular/core';
import { Events } from 'ionic-angular';

import { ActionSheet } from '../../classes/actionsheet';

@Component({
      selector: 'card',
      templateUrl: 'card.html'
})
export class CardComponent {
      @Input() cardholderName:string;
      @Input() cardNumber:string;
      @Input() redactedCardNumber:string;
      @Input() expiryMonth:number;
      @Input() expiryYear:number;
      @Input() cvv:string;
      @Input() postalCode:string;
      @Input() cardType:string;
      @Input() index:number;

      constructor(private actionSheet:ActionSheet, private events:Events) {}

      deleteSheet():void {
            this.actionSheet.deleteSheet(this.index).then(() => {
                  this.events.publish('cards:update');
            });
      }
}
