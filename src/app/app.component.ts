import { Component } from '@angular/core';
import { MyComponentComponent } from './my-component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MyComponentComponent]
})
export class AppComponent {
  title = 'app works!';
}
