import { OnInit, Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Fingerprint } from '../../classes/fingerprint';
import { Scanner } from '../../classes/scanner';
import { Storage } from '../../classes/storage';

@Component({
      selector: 'page-home',
      templateUrl: 'home.html'
})
export class HomePage implements OnInit {
      public authenticated:boolean;
      public cards:any;

      constructor(public navCtrl: NavController, private fingerprint:Fingerprint, private scanner:Scanner, private storage:Storage) {}

      ngOnInit():void {
            // this.cards = [
            //       {
            //             cardholderName: "Test",
            //             cardNumber: "1234567812345",
            //             redactedCardNumber: "2345",
            //             expiryMonth: "04",
            //             expiryYear: "17",
            //             cvv: "123",
            //             postalCode: "12345",
            //             cardType: "Visa",
            //             index: "0"
            //       }
            // ];
      }

      buttonAction():void {
            if (!this.authenticated) {
                  this.fingerprint.authenticate().then(() => {
                        this.authenticated = true;
                        this.storage.getAllCards().then((cards) => {
                              this.cards = cards;
                        }).catch(() => {
                              alert("couldn't get all cards");
                        });
                  }).catch(() => {
                        alert("couldn't authenticate");
                  });
            } else {
                  this.scanner.scan().then((card) => {
                        alert(`Got card:\n${JSON.stringify(card)}`)
                        this.storage.addCard(card).then((cards) => {
                              this.cards = cards;
                        }).catch(() => {
                              alert("couldn't add new card");
                        });
                  }).catch(() => {
                        alert("couldn't scan");
                  });
            }
      }
}
