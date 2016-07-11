import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-my-component',
  templateUrl: 'my-component.component.html',
  styleUrls: ['my-component.component.css', './styles/main.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [AlertComponent, DATEPICKER_DIRECTIVES]
})
export class MyComponentComponent implements OnInit {

 date: Date = new Date();
 
  constructor() {}

  ngOnInit() {
  }

}
