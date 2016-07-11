/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MyComponentComponent } from './my-component.component';

describe('Component: MyComponent', () => {
  it('should create an instance', () => {
    let component = new MyComponentComponent();
    expect(component).toBeTruthy();
  });
});
