import { Input, Component } from '@angular/core';

@Component({
      selector: 'unauth',
      templateUrl: 'unauth.html'
})
export class UnauthComponent {

      @Input() text:string;

      constructor() {}
}
