/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DefaultHeaderComponent } from './default-header.component';

describe('Component: DefaultHeader', () => {
  it('should create an instance', () => {
    let component = new DefaultHeaderComponent();
    expect(component).toBeTruthy();
  });
});
