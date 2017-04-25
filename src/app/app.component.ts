import {Component} from '@angular/core';
/**
 * Created by 168793 on 25.04.2017.
 */

@Component({
  selector: 'app-root', /*my-app*/

  template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
