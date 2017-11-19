import { OnInit, ViewChild, Input, Component } from '@angular/core';
import { Slides, Events } from 'ionic-angular';

@Component({
      selector: 'cards',
      templateUrl: 'cards.html'
})
export class CardsComponent implements OnInit {
      @Input() cards:Array<any>;
      @ViewChild('cardsSlide') cardsSlide:Slides;

      constructor(private events:Events) {
            events.subscribe('cards:update', () => {
                  this.cardsSlide.update();
            });
      }

      ngOnInit():void {
            setTimeout(() => {
                  this.cardsSlide.freeMode = true;
            }, 500);
      }

}
