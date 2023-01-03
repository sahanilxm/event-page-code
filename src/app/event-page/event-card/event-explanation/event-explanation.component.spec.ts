import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventExplanationComponent } from './event-explanation.component';

describe('EventExplanationComponent', () => {
  let component: EventExplanationComponent;
  let fixture: ComponentFixture<EventExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventExplanationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
