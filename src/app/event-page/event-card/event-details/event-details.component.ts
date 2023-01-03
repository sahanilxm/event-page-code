import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit{
  @Input() value1!: string;
  @Input() value2!: string;
  constructor() { }

  ngOnInit(): void {
  }
}
