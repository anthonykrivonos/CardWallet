import { Injectable } from '@angular/core';

import { ActionSheet as Action, ActionSheetOptions } from '@ionic-native/action-sheet';

import { Storage } from './storage';

@Injectable()
export class ActionSheet {
      constructor(private actionSheet:Action, private storage:Storage) {}

      deleteSheet(idx:number = null):Promise<any> {
            return new Promise((resolve, reject) => {
                  let options:ActionSheetOptions = {
                        title: `Editing Card at Position ${idx || '?'}`,
                        buttonLabels: ['Delete Single Card'],
                        addCancelButtonWithLabel: 'Cancel',
                        addDestructiveButtonWithLabel: 'Delete All Cards',
                        androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
                        destructiveButtonLast: true
                  };
                  this.actionSheet.show(options).then((index:number) => {
                        switch (index) {
                              case 1:
                                    this.storage.removeCard(idx).then(() => resolve());
                                    break;
                              case 2:
                                    this.storage.removeAllCards().then(() => resolve());
                                    break;
                              default:
                                    resolve();
                                    break;
                        }
                  }).catch(() => {
                        reject();
                  });
            });
      }
}
