import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapersTableComponent } from './papers-table.component';

describe('PapersTableComponent', () => {
  let component: PapersTableComponent;
  let fixture: ComponentFixture<PapersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
