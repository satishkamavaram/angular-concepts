import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormDirectiveComponent } from './reactive-form-directive.component';

describe('ReactiveFormDirectiveComponent', () => {
  let component: ReactiveFormDirectiveComponent;
  let fixture: ComponentFixture<ReactiveFormDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
