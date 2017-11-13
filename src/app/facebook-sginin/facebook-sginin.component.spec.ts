import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookSgininComponent } from './facebook-sginin.component';

describe('FacebookSgininComponent', () => {
  let component: FacebookSgininComponent;
  let fixture: ComponentFixture<FacebookSgininComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookSgininComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookSgininComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
