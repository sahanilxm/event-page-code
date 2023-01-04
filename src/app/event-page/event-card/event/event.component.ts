import { User } from './../../../userlist';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() eventName!: string;
  @Input() imgSrc!: string;
  @Input() value1!: string;
  @Input() value2!: string;
  @Input() value3!: string;
  @Input() value4!: string;
  @Input() value5!: string;
  @Input() value6!: string;
  @Input() eventDescription!: string;
  @Input() buttonValue!: string;
  @Input() registerLink!: string;
  @Input() regEndTime!: string;
  @Input() regStatus!: string;
  @Input() tagList!: Array<string>;
  @Input() topUsers!: Array<User>;
  @Input() otherUsers!: string;
  @Input() showUsers!: string;

  tags: Array<string> = [];
  otherTag = 0;
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.tagList.length; i++) {
      if (i < 3) {
        this.tags.push(this.tagList[i]);
      } else {
        this.otherTag++;
      }
    }
  }
}
