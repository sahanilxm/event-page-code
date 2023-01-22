import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  faLeft = faArrowLeft;
  faRight = faArrowRight;
  mainColor = "#FA7328";
  allEventsSel = 'assets/images/all-events-selected.svg';
  allEventsUnsel = 'assets/images/all-events-unselected.svg';
  setAllEvents = 'assets/images/all-events-selected.svg';
  codEventsSel = 'assets/images/coding-events-selected.svg';
  codEventsUnsel = 'assets/images/coding-events-unselected.svg';
  setCodEvents = 'assets/images/coding-events-unselected.svg';
  bootEventsSel = 'assets/images/bootcamp_events_selected.png';
  bootEventsUnsel = 'assets/images/bootcamp_events_unselected.png';
  setBootEvents = 'assets/images/bootcamp_events_unselected.png';
  webEventsSel = 'assets/images/webinar-selected.svg';
  webEventsUnsel = 'assets/images/webinar-unselected.svg';
  setWebEvents = 'assets/images/webinar-unselected.svg';
  workEventsSel = 'assets/images/workshop_selected.png';
  workEventsUnsel = 'assets/images/workshop_unselected.png';
  setWorkEvents = 'assets/images/workshop_unselected.png';

  type1 = 'ALL_EVENTS';
  type2 = 'WEBINAR';
  type3 = 'CODING_EVENT';
  type4 = 'BOOTCAMP_EVENT';
  type5 = 'WORKSHOP';

  typeSubCat1 = "Upcoming";
  typeSubCat2 = "Archived";
  typeSubCat3 = "All Time Favorites";

  color1 = '#FA7328';
  color2 = 'grey';
  color3 = 'grey';
  color4 = 'grey';
  color5 = 'grey';

  colorSub1 = '#FA7328';
  colorSub2 = "grey";
  colorSub3 = "grey";

  preSetCat = 'ALL_EVENTS';
  event_category = "ALL_EVENTS";
  event_sub_category = "Upcoming";
  tags: Array<string> = [];
  offset = 0;

  eventsObj = [];
  ta: any;
  events = [];
  tag = "";

  btn1 = "disabled";
  btn2 = "enabled";
  totPages = 1;
  curPage = 1;


  constructor(private http: HttpClient) { }


  private apiUrl = "https://api.codingninjas.com/api/v3/events";

  makeApi(): string {
    var api = this.apiUrl + "?event_category=" + this.event_category + "&event_sub_category=" + this.event_sub_category + "&tag_list=";
    for (let i = 0; i < this.tags.length; i++) {
      if (i == this.tags.length - 1) {
        api += this.tags[i];
      }
      else {
        api += this.tags[i] + ",";
      }
    }
    api += "&offset=" + this.offset;
    return api;
  }

  callApi() {
    var api = this.makeApi();
    this.http.get(api).
      pipe(
        map(data => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
      .subscribe((data: any) => {
        this.eventsObj = data.data.events;
        this.events = JSON.parse(JSON.stringify(this.eventsObj));
        this.totPages = data.data.page_count;
        this.curPage = (this.offset / 20) + 1;

      });
  }

  ngOnInit(): void {
    this.callApi();
  }

  updatePreEvent() {
    if (this.preSetCat === this.type1) {
      this.setAllEvents = this.allEventsUnsel;
      this.color1 = "grey";
    } else if (this.preSetCat === 'WEBINAR') {
      this.setWebEvents = this.webEventsUnsel;
      this.color2 = "grey";
    } else if (this.preSetCat === 'CODING_EVENT') {
      this.setCodEvents = this.codEventsUnsel;
      this.color3 = "grey";
    } else if (this.preSetCat === 'BOOTCAMP_EVENT') {
      this.setBootEvents = this.bootEventsUnsel;
      this.color4 = "grey";
    } else {
      this.setWorkEvents = this.workEventsUnsel;
      this.color5 = "grey";
    }
  }


  changeCategory(type: string) {
    this.updatePreEvent();
    if (type === this.type1) {
      this.setAllEvents = this.allEventsSel;
      this.color1 = "#FA7328";
    } else if (type === 'WEBINAR') {
      this.setWebEvents = this.webEventsSel;
      this.color2 = "#FA7328";
    } else if (type === 'CODING_EVENT') {
      this.setCodEvents = this.codEventsSel;
      this.color3 = "#FA7328";
    } else if (type === 'BOOTCAMP_EVENT') {
      this.setBootEvents = this.bootEventsSel;
      this.color4 = "#FA7328";
    } else {
      this.setWorkEvents = this.workEventsSel;
      this.color5 = "#FA7328";
    }
    this.preSetCat = type;
    this.event_category = type;
    this.offset = 0;
    this.callApi();
  }

  updateSubCat() {
    if (this.event_sub_category == this.typeSubCat1) {
      this.colorSub1 = "grey";
    } else if (this.event_sub_category == this.typeSubCat2) {
      this.colorSub2 = "grey";
    } else {
      this.colorSub3 = "grey";
    }
  }

  changeSubCategory(type: string) {
    this.updateSubCat();
    if (type == this.typeSubCat1) {
      this.colorSub1 = "#FA7328";
    } else if (type == this.typeSubCat2) {
      this.colorSub2 = "#FA7328";
    } else {
      this.colorSub3 = "#FA7328";
    }
    this.event_sub_category = type;
    this.offset = 0;
    this.callApi();
  }

  changeTag(tag: string) {
    const ind = this.tags.indexOf(tag);
    if (ind > -1) {
      this.tags.splice(ind, 1);
    } else {
      this.tags.push(tag);
    }
    this.offset = 0;
    this.callApi();
  }

  prevPage() {
    this.offset -= 20;
    this.callApi();
    document.documentElement.scrollTop = 0;
  }

  nextPage() {
    this.offset += 20;
    this.callApi();
    document.documentElement.scrollTop = 0;
  }

  functionPage() {
    var aa = (document.getElementById("pageVal") as HTMLInputElement).value;
    var a = parseInt(aa);
    if (a > this.totPages) return;
    else {
      this.offset = (a - 1) * 20;
      this.callApi();
      document.documentElement.scrollTop = 0;
    }
  }

  f(event: any): string {
    return event['name'];
  }

  searchText: string = '';

  onSearchTextEntered(searchvalue: string) {
    this.searchText = searchvalue;
  }
  
}
