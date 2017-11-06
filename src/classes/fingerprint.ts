import { Injectable } from '@angular/core';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

@Injectable()
export class Fingerprint {

      FINGERPRINT_OPTIONS:any = {
            clientId: 'Fingerprint-Demo',
            clientSecret: 'password',
            disableBackup: true,
            localizedFallbackTitle: 'Use Pin',
            localizedReason: 'Please Authenticate to Access Your Wallet'
      }

      constructor(private faio:FingerprintAIO) {}

      checkAvailability():Promise<any> {
            return new Promise((resolve, reject) => {
                  this.faio.isAvailable().then(() => {
                        resolve();
                  }).catch(() => {
                        reject();
                  })
            });
      }

      authenticate():Promise<any> {
            return new Promise((resolve, reject) => {
                  this.faio.show(this.FINGERPRINT_OPTIONS).then((result) => {
                        resolve(result);
                  }).catch((error) => {
                        reject(error);
                  });
            });
      }
}
