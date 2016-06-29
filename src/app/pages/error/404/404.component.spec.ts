/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PageError404Component } from './404.component';

describe('Component: PageError404', () => {
  it('should create an instance', () => {
    let component = new PageError404Component();
    expect(component).toBeTruthy();
  });
});
