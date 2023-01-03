import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegisteredUsersComponent } from './event-registered-users.component';

describe('EventRegisteredUsersComponent', () => {
  let component: EventRegisteredUsersComponent;
  let fixture: ComponentFixture<EventRegisteredUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventRegisteredUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventRegisteredUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
