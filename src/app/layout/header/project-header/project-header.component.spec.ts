/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProjectHeaderComponent } from './project-header.component';

describe('Component: ProjectHeader', () => {
  it('should create an instance', () => {
    let component = new ProjectHeaderComponent();
    expect(component).toBeTruthy();
  });
});
