import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Native
import { ActionSheet as Action, ActionSheetOptions } from '@ionic-native/action-sheet';
import { CardIO, CardIOOptions } from '@ionic-native/card-io';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { NativeStorage } from '@ionic-native/native-storage';

//Classes
import { ActionSheet } from '../classes/actionsheet';
import { Fingerprint } from '../classes/fingerprint';
import { Scanner } from '../classes/scanner';
import { Storage } from '../classes/storage';

// Components
import { ShutterComponent } from '../components/shutter/shutter';
import { CardsComponent } from '../components/cards/cards';
import { CardComponent } from '../components/card/card';
import { UnauthComponent } from '../components/unauth/unauth';

// Pipes
import { ParsePipe } from '../pipes/parse';

import { CardWallet } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
      declarations: [
            CardWallet,
            HomePage,
            // Components
            ShutterComponent,
            CardsComponent,
            CardComponent,
            UnauthComponent,
            // Pipes
            ParsePipe
      ],
      imports: [
            BrowserModule,
            IonicModule.forRoot(CardWallet)
      ],
      bootstrap: [IonicApp],
      entryComponents: [
            CardWallet,
            HomePage
      ],
      providers: [
            StatusBar,
            SplashScreen,
            {provide: ErrorHandler, useClass: IonicErrorHandler},
            //Classes
            ActionSheet,
            Fingerprint,
            Scanner,
            Storage,
            // Native
            Action,
            CardIO,
            FingerprintAIO,
            NativeStorage
      ]
})
export class AppModule {}
