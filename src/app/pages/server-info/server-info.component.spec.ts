/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PageServerInfoComponent } from './server-info.component';

describe('Component: PageServerInfo', () => {
  it('should create an instance', () => {
    let component = new PageServerInfoComponent();
    expect(component).toBeTruthy();
  });
});
