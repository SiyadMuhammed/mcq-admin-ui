import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaperModalComponent } from './create-paper-modal.component';

describe('CreatePaperModalComponent', () => {
  let component: CreatePaperModalComponent;
  let fixture: ComponentFixture<CreatePaperModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePaperModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaperModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
