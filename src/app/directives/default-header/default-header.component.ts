import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NavbarUtilityComponent } from '../navbar-utility';

@Component({
  moduleId: module.id,
  selector: 'default-header',
  templateUrl: 'default-header.component.html',
  styleUrls: ['default-header.component.css'],
  directives: [NavbarUtilityComponent]
})
export class DefaultHeaderComponent implements OnInit {

  isCollapsed: boolean;
  
  @Output() onCollapsedChanged = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  changeCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.onCollapsedChanged.emit(this.isCollapsed);
  }

}
