import { Input, Component } from '@angular/core';

/**
* Generated class for the CardsComponent component.
*
* See https://angular.io/api/core/Component for more info on Angular
* Components.
*/
@Component({
      selector: 'cards',
      templateUrl: 'cards.html'
})
export class CardsComponent {
      @Input() cards;

      constructor() {
            console.log('Hello CardsComponent Component');
      }

}
