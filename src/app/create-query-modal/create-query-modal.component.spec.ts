import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQueryModalComponent } from './create-query-modal.component';

describe('CreateQueryModalComponent', () => {
  let component: CreateQueryModalComponent;
  let fixture: ComponentFixture<CreateQueryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQueryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQueryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
