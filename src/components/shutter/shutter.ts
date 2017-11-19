import { Input, Component } from '@angular/core';

@Component({
      selector: 'shutter',
      templateUrl: 'shutter.html'
})
export class ShutterComponent {
      @Input ('type') type:string;

      constructor() {}
}
