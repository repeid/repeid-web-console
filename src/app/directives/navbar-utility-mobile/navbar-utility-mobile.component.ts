import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar-utility-mobile',
  templateUrl: 'navbar-utility-mobile.component.html',
  styleUrls: ['navbar-utility-mobile.component.css']
})
export class NavbarUtilityMobileComponent implements OnInit {

  @Input() isCollapsed: boolean;

  constructor() { }

  ngOnInit() {
  }

}
