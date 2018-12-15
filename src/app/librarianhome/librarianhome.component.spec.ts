import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianhomeComponent } from './librarianhome.component';

describe('LibrarianhomeComponent', () => {
  let component: LibrarianhomeComponent;
  let fixture: ComponentFixture<LibrarianhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarianhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
