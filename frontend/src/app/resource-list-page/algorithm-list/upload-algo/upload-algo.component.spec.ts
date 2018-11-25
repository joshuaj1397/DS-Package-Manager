import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAlgoComponent } from './upload-algo.component';

describe('UploadAlgoComponent', () => {
  let component: UploadAlgoComponent;
  let fixture: ComponentFixture<UploadAlgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadAlgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
