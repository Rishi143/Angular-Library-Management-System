import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedComponent } from './issued.component';

describe('IssuedComponent', () => {
  let component: IssuedComponent;
  let fixture: ComponentFixture<IssuedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
