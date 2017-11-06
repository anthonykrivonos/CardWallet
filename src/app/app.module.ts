import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Native
import { CardIO, CardIOOptions } from '@ionic-native/card-io';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { NativeStorage } from '@ionic-native/native-storage';

//Classes
import { Fingerprint } from '../classes/fingerprint';
import { Scanner } from '../classes/scanner';
import { Storage } from '../classes/storage';

// Components
import { ShutterComponent } from '../components/shutter/shutter';
import { CardsComponent } from '../components/cards/cards';
import { CardComponent } from '../components/card/card';
import { UnauthComponent } from '../components/unauth/unauth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
      declarations: [
            MyApp,
            HomePage,
            // Components
            ShutterComponent,
            CardsComponent,
            CardComponent,
            UnauthComponent
      ],
      imports: [
            BrowserModule,
            IonicModule.forRoot(MyApp)
      ],
      bootstrap: [IonicApp],
      entryComponents: [
            MyApp,
            HomePage
      ],
      providers: [
            StatusBar,
            SplashScreen,
            {provide: ErrorHandler, useClass: IonicErrorHandler},
            //Classes
            Fingerprint,
            Scanner,
            Storage,
            // Native
            CardIO,
            FingerprintAIO,
            NativeStorage
      ]
})
export class AppModule {}
