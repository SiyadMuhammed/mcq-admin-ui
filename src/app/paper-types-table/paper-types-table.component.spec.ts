import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperTypesTableComponent } from './paper-types-table.component';

describe('PaperTypesTableComponent', () => {
  let component: PaperTypesTableComponent;
  let fixture: ComponentFixture<PaperTypesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperTypesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperTypesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
