import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesTableComponent } from './queries-table.component';

describe('QueriesTableComponent', () => {
  let component: QueriesTableComponent;
  let fixture: ComponentFixture<QueriesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueriesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
