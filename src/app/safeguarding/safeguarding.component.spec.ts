/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SafeguardingComponent } from './safeguarding.component';

describe('SafeguardingComponent', () => {
  let component: SafeguardingComponent;
  let fixture: ComponentFixture<SafeguardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeguardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeguardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
