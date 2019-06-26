import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Frage3Component } from './frage3.component';

describe('Frage3Component', () => {
  let component: Frage3Component;
  let fixture: ComponentFixture<Frage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Frage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
