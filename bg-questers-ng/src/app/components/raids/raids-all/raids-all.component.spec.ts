import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidsAllComponent } from './raids-all.component';

describe('RaidsAllComponent', () => {
  let component: RaidsAllComponent;
  let fixture: ComponentFixture<RaidsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
