import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaperTypeModalComponent } from './create-paper-type-modal.component';

describe('CreatePaperTypeModalComponent', () => {
  let component: CreatePaperTypeModalComponent;
  let fixture: ComponentFixture<CreatePaperTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePaperTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaperTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
