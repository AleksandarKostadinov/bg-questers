import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestSuggestComponent } from './quest-suggest.component';

describe('QuestSuggestComponent', () => {
  let component: QuestSuggestComponent;
  let fixture: ComponentFixture<QuestSuggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestSuggestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
