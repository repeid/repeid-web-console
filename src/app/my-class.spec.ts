/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {MyClass} from './my-class';

describe('MyClass', () => {
  it('should create an instance', () => {
    expect(new MyClass()).toBeTruthy();
  });
});
