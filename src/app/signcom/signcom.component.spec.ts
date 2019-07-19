import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigncomComponent } from './signcom.component';

describe('SigncomComponent', () => {
  let component: SigncomComponent;
  let fixture: ComponentFixture<SigncomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigncomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigncomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
