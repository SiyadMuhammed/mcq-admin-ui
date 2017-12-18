import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePaperComponent } from './manage-paper.component';

describe('ManagePaperComponent', () => {
  let component: ManagePaperComponent;
  let fixture: ComponentFixture<ManagePaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
