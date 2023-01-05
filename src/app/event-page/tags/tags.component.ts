import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  tags = [];
  tagsAll = [];
  tags2 = [];
  ta: any;
  flag = false;

  inclTags: Array<string> = [];
  private apiUrl = "https://api.codingninjas.com/api/v3/event_tags";
  @Output() tagChange = new EventEmitter<string>();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.apiUrl).subscribe(Response => {
      this.ta = Response;
      this.tags = this.ta.data.tags;
      console.log(this.tags);
      this.tagsAll = this.tags;
      for (let i = 0; i < Math.min(10, this.tags.length); i++) {
        this.tags2.push(this.tags[i]);
      }
      this.tags = this.tags2;
    });
  }

  seeMore() {
    console.log("Hitted");
    this.tags = this.tagsAll;
    this.flag = true;
  }

  tagClicked(tag: string) {
    console.log(tag);
    const ind = this.inclTags.indexOf(tag);
    if (ind > -1) {
      this.inclTags.splice(ind, 1);
    } else {
      this.inclTags.push(tag);
    }
    this.tagChange.emit(tag);
  }
}
