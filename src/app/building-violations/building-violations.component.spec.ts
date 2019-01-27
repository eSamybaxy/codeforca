import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingViolationsComponent } from './building-violations.component';

describe('BuildingViolationsComponent', () => {
  let component: BuildingViolationsComponent;
  let fixture: ComponentFixture<BuildingViolationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingViolationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingViolationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
