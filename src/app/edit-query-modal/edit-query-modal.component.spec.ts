import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQueryModalComponent } from './edit-query-modal.component';

describe('EditQueryModalComponent', () => {
  let component: EditQueryModalComponent;
  let fixture: ComponentFixture<EditQueryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQueryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQueryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
