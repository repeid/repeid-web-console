import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';

import { DefaultHeaderComponent } from '../directives/default-header';

@Component({
  moduleId: module.id,
  selector: 'app-organizations',
  templateUrl: 'organizations.component.html',
  styleUrls: ['organizations.component.css'],
  directives: [ROUTER_DIRECTIVES, DefaultHeaderComponent]
})
export class OrganizationsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  edit() {
    let link = ['/organizations/edit-organization', 'master'];
    this.router.navigate(link);
  }

}
