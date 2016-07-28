import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';

import {CollapseDirective} from 'ng2-bootstrap';

import { DefaultHeaderComponent } from '../directives/default-header';
import { NavbarUtilityMobileComponent } from '../directives/navbar-utility-mobile';

@Component({
  moduleId: module.id,
  selector: 'app-organizations',
  templateUrl: 'organizations.component.html',
  styleUrls: ['organizations.component.css'],
  directives: [ROUTER_DIRECTIVES, CollapseDirective, DefaultHeaderComponent, NavbarUtilityMobileComponent]
})
export class OrganizationsComponent implements OnInit {

  isCollapsed: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCollapsedChangedByChildren(isCollapsed: boolean) {    
    this.isCollapsed = isCollapsed;   
  }

  editProject(project: string) {
    let link = ['/organizations/edit-organization', project];
    this.router.navigate(link);
  }

}
