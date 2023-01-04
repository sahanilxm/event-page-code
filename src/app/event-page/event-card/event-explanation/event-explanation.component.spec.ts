import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-explanation',
  templateUrl: './event-explanation.component.html',
  styleUrls: ['./event-explanation.component.css']
})
export class EventExplanationComponent implements OnInit {
  @Input() description!: string;
  constructor() { }

  ngOnInit(): void {
  }
}
