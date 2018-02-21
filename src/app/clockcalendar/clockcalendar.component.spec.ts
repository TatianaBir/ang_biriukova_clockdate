import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockcalendarComponent } from './clockcalendar.component';

describe('ClockcalendarComponent', () => {
  let component: ClockcalendarComponent;
  let fixture: ComponentFixture<ClockcalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockcalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
