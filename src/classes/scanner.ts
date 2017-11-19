import { Injectable } from '@angular/core';

import { CardIO, CardIOOptions } from '@ionic-native/card-io';

@Injectable()
export class Scanner {

      SCANNER_OPTIONS:CardIOOptions = {
            requireExpiry: true,
            requireCVV: true,
            requirePostalCode: true,
            restrictPostalCodeToNumericOnly: true,
            requireCardholderName: true,
            scanExpiry: true,
            supressConfirmation: false,
            hideCardIOLogo: true,
            useCardIOLogo: false,
            supressManual: true,
            keepApplicationTheme: true
      }

      constructor(private cardIO:CardIO) {}

      scan():Promise<any> {
            return new Promise((resolve, reject) => {
                  this.cardIO.canScan().then((res) => {
                        if (res) {
                              this.cardIO.scan(this.SCANNER_OPTIONS).then((card) => {
                                    resolve(card);
                              }).catch(() => {
                                    reject();
                              });
                        } else {
                              reject();
                        }
                  });
            });
      }
}
