import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidDeleteComponent } from './raid-delete.component';

describe('RaidDeleteComponent', () => {
  let component: RaidDeleteComponent;
  let fixture: ComponentFixture<RaidDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
