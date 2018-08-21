import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidsCreateComponent } from './raids-create.component';

describe('RaidsCreateComponent', () => {
  let component: RaidsCreateComponent;
  let fixture: ComponentFixture<RaidsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
