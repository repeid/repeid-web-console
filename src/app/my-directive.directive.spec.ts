/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MyDirective } from './my-directive.directive';

describe('MyDirective Directive', () => {
  it('should create an instance', () => {
    let directive = new MyDirective();
    expect(directive).toBeTruthy();
  });
});
