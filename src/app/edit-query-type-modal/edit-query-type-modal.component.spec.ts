import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQueryTypeModalComponent } from './edit-query-type-modal.component';

describe('EditQueryTypeModalComponent', () => {
  let component: EditQueryTypeModalComponent;
  let fixture: ComponentFixture<EditQueryTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQueryTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQueryTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
