import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Frage1Component } from './frage1.component';

describe('Frage1Component', () => {
  let component: Frage1Component;
  let fixture: ComponentFixture<Frage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Frage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
