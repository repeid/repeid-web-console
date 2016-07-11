import { Component, ViewEncapsulation } from '@angular/core';
import { MyComponentComponent } from './my-component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css', '../styles/main.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [MyComponentComponent]
})
export class AppComponent {
  title = 'app works!';
}
