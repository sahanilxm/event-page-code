import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-poster',
  templateUrl: './event-poster.component.html',
  styleUrls: ['./event-poster.component.css']
})
export class EventPosterComponent implements OnInit {
  @Input() imgSrc!: string;
  @Input() regEndTime!: string;
  @Input() regStatus!: string;
  constructor() { }

  ngOnInit(): void {
  }
}
