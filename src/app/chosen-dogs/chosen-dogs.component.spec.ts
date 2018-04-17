import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenDogsComponent } from './chosen-dogs.component';

describe('ChosenDogsComponent', () => {
  let component: ChosenDogsComponent;
  let fixture: ComponentFixture<ChosenDogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenDogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
