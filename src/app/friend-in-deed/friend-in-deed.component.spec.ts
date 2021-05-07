/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FriendInDeedComponent } from './friend-in-deed.component';

describe('FriendInDeedComponent', () => {
  let component: FriendInDeedComponent;
  let fixture: ComponentFixture<FriendInDeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendInDeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendInDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
