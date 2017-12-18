import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryTypesTableComponent } from './query-types-table.component';

describe('QueryTypesTableComponent', () => {
  let component: QueryTypesTableComponent;
  let fixture: ComponentFixture<QueryTypesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryTypesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryTypesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
