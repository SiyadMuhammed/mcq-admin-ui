import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaperTypeModalComponent } from './edit-paper-type-modal.component';

describe('EditPaperTypeModalComponent', () => {
  let component: EditPaperTypeModalComponent;
  let fixture: ComponentFixture<EditPaperTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPaperTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaperTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
