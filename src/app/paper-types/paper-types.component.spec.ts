import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperTypesComponent } from './paper-types.component';

describe('PaperTypesComponent', () => {
  let component: PaperTypesComponent;
  let fixture: ComponentFixture<PaperTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
