import { Component, OnInit } from '@angular/core';

import { NavbarUtilityComponent } from '../navbar-utility';

@Component({
  moduleId: module.id,
  selector: 'default-header',
  templateUrl: 'default-header.component.html',
  styleUrls: ['default-header.component.css'],
  directives: [NavbarUtilityComponent]
})
export class DefaultHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
