import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BissueComponent } from './bissue.component';

describe('BissueComponent', () => {
  let component: BissueComponent;
  let fixture: ComponentFixture<BissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
