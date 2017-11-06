import { Injectable } from '@angular/core';

import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class Storage {
      constructor(private nativeStorage:NativeStorage) {}

      // Cards

      getAllCards():Promise<any> {
            return new Promise((resolve, reject) => {
                  this.nativeStorage.getItem('cards').then((cards) => {
                        resolve(cards || []);
                  }).catch(() => {
                        this.setAllCards([]).then(() => {
                              resolve([]);
                        }).catch(() => {
                              reject([]);
                        });
                  });
            });
      }

      setAllCards(cards:any):Promise<any> {
            return new Promise((resolve, reject) => {
                  this.nativeStorage.setItem('cards', cards).then(() => {
                        resolve(cards || []);
                  }).catch(() => {
                        reject([]);
                  });
            });
      }

      removeAllCards():Promise<any> {
            return new Promise((resolve, reject) => {
                  this.nativeStorage.remove('cards').then(() => {
                        resolve();
                  }).catch(() => {
                        reject();
                  });
            });
      }

      addCard(card:any):Promise<any> {
            return new Promise((resolve, reject) => {
                  this.getAllCards().then((cards) => {
                        cards = cards.push(card);
                        this.setAllCards(cards).then(() => {
                              resolve(cards);
                        }).catch(() => {
                              reject();
                        });
                  }).catch(() => {
                        reject();
                  });
            });
      }

      removeCard(index:number):Promise<any> {
            return new Promise((resolve, reject) => {
                  this.getAllCards().then((cards) => {
                        cards = cards.splice(index, 1);
                        this.setAllCards(cards).then(() => {
                              resolve(cards);
                        }).catch(() => {
                              reject();
                        });
                  }).catch(() => {
                        reject();
                  });
            });
      }
}
