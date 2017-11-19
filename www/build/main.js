webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Storage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Storage = (function () {
    function Storage(nativeStorage) {
        this.nativeStorage = nativeStorage;
    }
    // Cards
    Storage.prototype.getAllCards = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.nativeStorage.getItem('cards').then(function (cards) {
                resolve(cards);
            }).catch(function () {
                _this.setAllCards([]).then(function () {
                    resolve([]);
                }).catch(function () {
                    reject();
                });
            });
        });
    };
    Storage.prototype.setAllCards = function (cards) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.nativeStorage.setItem('cards', cards).then(function () {
                resolve(cards);
            }).catch(function () {
                reject([]);
            });
        });
    };
    Storage.prototype.removeAllCards = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.nativeStorage.remove('cards').then(function () {
                resolve();
            }).catch(function () {
                reject();
            });
        });
    };
    Storage.prototype.addCard = function (card) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAllCards().then(function (cards) {
                cards.push(card);
                _this.setAllCards(Array.isArray(cards) ? cards : [cards]).then(function () {
                    resolve(cards);
                }).catch(function () {
                    reject();
                });
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    Storage.prototype.removeCard = function (index) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAllCards().then(function (cards) {
                cards.splice(index || 0, 1);
                _this.setAllCards(cards).then(function () {
                    resolve(cards);
                }).catch(function () {
                    reject();
                });
            }).catch(function () {
                reject();
            });
        });
    };
    return Storage;
}());
Storage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__["a" /* NativeStorage */]])
], Storage);

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSheet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_action_sheet__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActionSheet = (function () {
    function ActionSheet(actionSheet, storage) {
        this.actionSheet = actionSheet;
        this.storage = storage;
    }
    ActionSheet.prototype.deleteSheet = function (idx) {
        var _this = this;
        if (idx === void 0) { idx = null; }
        return new Promise(function (resolve, reject) {
            var options = {
                title: "Editing Card at Position " + (idx || '?'),
                buttonLabels: ['Delete Single Card'],
                addCancelButtonWithLabel: 'Cancel',
                addDestructiveButtonWithLabel: 'Delete All Cards',
                androidTheme: _this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
                destructiveButtonLast: true
            };
            _this.actionSheet.show(options).then(function (index) {
                switch (index) {
                    case 1:
                        _this.storage.removeCard(idx).then(function () { return resolve(); });
                        break;
                    case 2:
                        _this.storage.removeAllCards().then(function () { return resolve(); });
                        break;
                    default:
                        resolve();
                        break;
                }
            }).catch(function () {
                reject();
            });
        });
    };
    return ActionSheet;
}());
ActionSheet = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_action_sheet__["a" /* ActionSheet */], __WEBPACK_IMPORTED_MODULE_2__storage__["a" /* Storage */]])
], ActionSheet);

//# sourceMappingURL=actionsheet.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fingerprint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_fingerprint_aio__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Fingerprint = (function () {
    function Fingerprint(faio) {
        this.faio = faio;
        this.FINGERPRINT_OPTIONS = {
            clientId: 'Fingerprint-Demo',
            clientSecret: 'password',
            disableBackup: true,
            localizedFallbackTitle: 'Use Pin',
            localizedReason: 'Please Authenticate to Access Your Wallet'
        };
    }
    Fingerprint.prototype.checkAvailability = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.faio.isAvailable().then(function () {
                resolve();
            }).catch(function () {
                reject();
            });
        });
    };
    Fingerprint.prototype.authenticate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.faio.show(_this.FINGERPRINT_OPTIONS).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    return Fingerprint;
}());
Fingerprint = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]])
], Fingerprint);

//# sourceMappingURL=fingerprint.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scanner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_card_io__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Scanner = (function () {
    function Scanner(cardIO) {
        this.cardIO = cardIO;
        this.SCANNER_OPTIONS = {
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
        };
    }
    Scanner.prototype.scan = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cardIO.canScan().then(function (res) {
                if (res) {
                    _this.cardIO.scan(_this.SCANNER_OPTIONS).then(function (card) {
                        resolve(card);
                    }).catch(function () {
                        reject();
                    });
                }
                else {
                    reject();
                }
            });
        });
    };
    return Scanner;
}());
Scanner = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_card_io__["a" /* CardIO */]])
], Scanner);

//# sourceMappingURL=scanner.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_fingerprint__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_scanner__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_storage__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(events, navCtrl, fingerprint, scanner, storage) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.fingerprint = fingerprint;
        this.scanner = scanner;
        this.storage = storage;
        events.subscribe('cards:update', function () {
            _this.updateCards();
        });
    }
    HomePage.prototype.updateCards = function () {
        var _this = this;
        this.cardsLoaded = false;
        this.storage.getAllCards().then(function (cards) {
            _this.cards = [];
            setTimeout(function () {
                _this.cards = cards;
                _this.cardsLoaded = true;
            }, 500);
        });
    };
    HomePage.prototype.authenticate = function () {
        var _this = this;
        this.fingerprint.authenticate().then(function () {
            _this.authenticated = true;
            _this.events.publish('cards:update');
        });
    };
    HomePage.prototype.scan = function () {
        var _this = this;
        this.scanner.scan().then(function (card) {
            _this.storage.addCard(card).then(function () {
                _this.events.publish('cards:update');
            });
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Anthony/dev/CardWallet/src/pages/home/home.html"*/'<ion-header>\n      <ion-navbar color="dark">\n            <ion-title>\n                  CardWallet\n            </ion-title>\n      </ion-navbar>\n</ion-header>\n<ion-scroll no-padding>\n      <unauth *ngIf="cardsLoaded && cards?.length == 0 && authenticated" [text]="\'No cards available.\'"></unauth>\n      <unauth *ngIf="!authenticated" [text]="\'User not authenticated.\'"></unauth>\n      <cards *ngIf="cardsLoaded && cards?.length > 0 && authenticated" [cards]="cards"></cards>\n</ion-scroll>\n<shutter *ngIf="!authenticated" [type]="\'authenticate\'" (tap)="authenticate()"></shutter>\n<shutter *ngIf="authenticated" [type]="\'scan\'" (tap)="scan()"></shutter>\n'/*ion-inline-end:"/Users/Anthony/dev/CardWallet/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__classes_fingerprint__["a" /* Fingerprint */], __WEBPACK_IMPORTED_MODULE_3__classes_scanner__["a" /* Scanner */], __WEBPACK_IMPORTED_MODULE_4__classes_storage__["a" /* Storage */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_action_sheet__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_card_io__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fingerprint_aio__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__classes_actionsheet__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__classes_fingerprint__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__classes_scanner__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__classes_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_shutter_shutter__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_cards_cards__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_card_card__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_unauth_unauth__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_parse__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Native




//Classes




// Components




// Pipes



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* CardWallet */],
            __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
            // Components
            __WEBPACK_IMPORTED_MODULE_13__components_shutter_shutter__["a" /* ShutterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_cards_cards__["a" /* CardsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_card_card__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_unauth_unauth__["a" /* UnauthComponent */],
            // Pipes
            __WEBPACK_IMPORTED_MODULE_17__pipes_parse__["a" /* ParsePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* CardWallet */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* CardWallet */],
            __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            //Classes
            __WEBPACK_IMPORTED_MODULE_9__classes_actionsheet__["a" /* ActionSheet */],
            __WEBPACK_IMPORTED_MODULE_10__classes_fingerprint__["a" /* Fingerprint */],
            __WEBPACK_IMPORTED_MODULE_11__classes_scanner__["a" /* Scanner */],
            __WEBPACK_IMPORTED_MODULE_12__classes_storage__["a" /* Storage */],
            // Native
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_action_sheet__["a" /* ActionSheet */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_card_io__["a" /* CardIO */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShutterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShutterComponent = (function () {
    function ShutterComponent() {
    }
    return ShutterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('type'),
    __metadata("design:type", String)
], ShutterComponent.prototype, "type", void 0);
ShutterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'shutter',template:/*ion-inline-start:"/Users/Anthony/dev/CardWallet/src/components/shutter/shutter.html"*/'<ion-footer *ngIf="type" text-center>\n      <button color="dark" ion-button><ion-icon name="{{type == \'authenticate\' ? \'md-finger-print\' : \'qr-scanner\'}}"></ion-icon></button>\n</ion-footer>\n'/*ion-inline-end:"/Users/Anthony/dev/CardWallet/src/components/shutter/shutter.html"*/
    }),
    __metadata("design:paramtypes", [])
], ShutterComponent);

//# sourceMappingURL=shutter.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsComponent = (function () {
    function CardsComponent(events) {
        var _this = this;
        this.events = events;
        events.subscribe('cards:update', function () {
            _this.cardsSlide.update();
        });
    }
    CardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.cardsSlide.freeMode = true;
        }, 500);
    };
    return CardsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], CardsComponent.prototype, "cards", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('cardsSlide'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Slides */])
], CardsComponent.prototype, "cardsSlide", void 0);
CardsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cards',template:/*ion-inline-start:"/Users/Anthony/dev/CardWallet/src/components/cards/cards.html"*/'<ion-slides #cardsSlide *ngIf="cards"\n      centeredSlides="false"\n      direction="vertical"\n      spaceBetween="0"\n      speed="400"\n      zoom="true"\n      slidesPerView="3">\n      <ion-slide *ngFor="let card of cards; index as i">\n            <card\n                  [cardholderName]="card?.cardholderName"\n                  [cardNumber]="card?.cardNumber"\n                  [redactedCardNumber]="card?.redactedCardNumber"\n                  [expiryMonth]="card?.expiryMonth"\n                  [expiryYear]="card?.expiryYear"\n                  [cvv]="card?.cvv"\n                  [postalCode]="card?.postalCode"\n                  [cardType]="card?.cardType"\n                  [index]="i"\n            ></card>\n      </ion-slide>\n</ion-slides>\n'/*ion-inline-end:"/Users/Anthony/dev/CardWallet/src/components/cards/cards.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], CardsComponent);

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_actionsheet__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardComponent = (function () {
    function CardComponent(actionSheet, events) {
        this.actionSheet = actionSheet;
        this.events = events;
    }
    CardComponent.prototype.deleteSheet = function () {
        var _this = this;
        this.actionSheet.deleteSheet(this.index).then(function () {
            _this.events.publish('cards:update');
        });
    };
    return CardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CardComponent.prototype, "cardholderName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CardComponent.prototype, "cardNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CardComponent.prototype, "redactedCardNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], CardComponent.prototype, "expiryMonth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], CardComponent.prototype, "expiryYear", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CardComponent.prototype, "cvv", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CardComponent.prototype, "postalCode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CardComponent.prototype, "cardType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], CardComponent.prototype, "index", void 0);
CardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'card',template:/*ion-inline-start:"/Users/Anthony/dev/CardWallet/src/components/card/card.html"*/'<ion-card *ngIf="index != null" (tap)="deleteSheet()">\n      <ion-card-header>\n            {{cardType}} Card\n            <p>{{cardholderName}}</p>\n      </ion-card-header>\n      <ion-card-content>\n            <h1>{{redactedCardNumber}}</h1>\n            <h2>Expires {{expiryMonth}}/{{expiryYear}}</h2>\n            <h3>Postal Code: {{postalCode}}</h3>\n      </ion-card-content>\n      <ion-row>\n            <ion-col>\n                  <div small>CVV: {{cvv}}</div>\n            </ion-col>\n      </ion-row>\n</ion-card>\n'/*ion-inline-end:"/Users/Anthony/dev/CardWallet/src/components/card/card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__classes_actionsheet__["a" /* ActionSheet */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], CardComponent);

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnauthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnauthComponent = (function () {
    function UnauthComponent() {
    }
    return UnauthComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], UnauthComponent.prototype, "text", void 0);
UnauthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'unauth',template:/*ion-inline-start:"/Users/Anthony/dev/CardWallet/src/components/unauth/unauth.html"*/'<div class="content">\n      <div>{{text}}</div>\n</div>\n'/*ion-inline-end:"/Users/Anthony/dev/CardWallet/src/components/unauth/unauth.html"*/
    }),
    __metadata("design:paramtypes", [])
], UnauthComponent);

//# sourceMappingURL=unauth.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParsePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ParsePipe = (function () {
    function ParsePipe() {
    }
    ParsePipe.prototype.transform = function (value, args) {
        return Array.isArray(value) ? Array.from(value) : [value];
    };
    return ParsePipe;
}());
ParsePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'parse' })
], ParsePipe);

//# sourceMappingURL=parse.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardWallet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardWallet = (function () {
    function CardWallet(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleLightContent();
            splashScreen.hide();
        });
    }
    return CardWallet;
}());
CardWallet = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Anthony/dev/CardWallet/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Anthony/dev/CardWallet/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], CardWallet);

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map