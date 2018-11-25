import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmSingleComponent } from './algorithm-single.component';

describe('AlgorithmSingleComponent', () => {
  let component: AlgorithmSingleComponent;
  let fixture: ComponentFixture<AlgorithmSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
