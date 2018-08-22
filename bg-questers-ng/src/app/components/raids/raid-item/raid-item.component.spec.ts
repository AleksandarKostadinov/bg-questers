import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidItemComponent } from './raid-item.component';

describe('RaidItemComponent', () => {
  let component: RaidItemComponent;
  let fixture: ComponentFixture<RaidItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
