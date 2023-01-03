import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-registered-users',
  templateUrl: './event-registered-users.component.html',
  styleUrls: ['./event-registered-users.component.css']
})
export class EventRegisteredUsersComponent implements OnInit{
  @Input() imgSrc!: string;
  @Input() name!: string;
  @Input() otherUsers!: string;
  @Input() regStatus!: string;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.name);
    // console.log(this.imgSrc);
  }
}
