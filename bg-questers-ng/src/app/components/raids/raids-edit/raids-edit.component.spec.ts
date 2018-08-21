import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidsEditComponent } from './raids-edit.component';

describe('RaidsEditComponent', () => {
  let component: RaidsEditComponent;
  let fixture: ComponentFixture<RaidsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
