import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuestsComponent } from './all-quests.component';

describe('AllQuestsComponent', () => {
  let component: AllQuestsComponent;
  let fixture: ComponentFixture<AllQuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllQuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllQuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
