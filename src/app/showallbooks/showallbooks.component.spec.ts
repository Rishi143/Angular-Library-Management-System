import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallbooksComponent } from './showallbooks.component';

describe('ShowallbooksComponent', () => {
  let component: ShowallbooksComponent;
  let fixture: ComponentFixture<ShowallbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
