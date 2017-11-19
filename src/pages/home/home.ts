import { Component } from '@angular/core';
import { Events, NavController } from 'ionic-angular';

import { Fingerprint } from '../../classes/fingerprint';
import { Scanner } from '../../classes/scanner';
import { Storage } from '../../classes/storage';

@Component({
      selector: 'page-home',
      templateUrl: 'home.html'
})
export class HomePage {
      public authenticated:boolean;
      public cardsLoaded:boolean;
      public cards:Array<any>;

      constructor(private events:Events, private navCtrl: NavController, private fingerprint:Fingerprint, private scanner:Scanner, private storage:Storage) {
            events.subscribe('cards:update', () => {
                  this.updateCards();
            });
      }

      updateCards():void {
            this.cardsLoaded = false;
            this.storage.getAllCards().then((cards:Array<any>) => {
                  this.cards = [];
                  setTimeout(() => {
                        this.cards = cards;
                        this.cardsLoaded = true;
                  }, 500);
            });
      }

      authenticate():void {
            this.fingerprint.authenticate().then(() => {
                  this.authenticated = true;
                  this.events.publish('cards:update');
            });
      }

      scan():void {
            this.scanner.scan().then((card) => {
                  this.storage.addCard(card).then(() => {
                        this.events.publish('cards:update');
                  });
            });
      }
}
