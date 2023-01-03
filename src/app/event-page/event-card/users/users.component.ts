import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  @Input() name?: string;
  @Input() imgSrc?: string;
  @Input() otherUsers!: string;
  @Input() showUsers!: string;
  constructor() { }

  ngOnInit(): void {
  }
}
