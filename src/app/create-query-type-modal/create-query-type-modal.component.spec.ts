import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQueryTypeModalComponent } from './create-query-type-modal.component';

describe('CreateQueryTypeModalComponent', () => {
  let component: CreateQueryTypeModalComponent;
  let fixture: ComponentFixture<CreateQueryTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQueryTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQueryTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
