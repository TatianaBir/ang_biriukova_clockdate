import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clockcalendar',
  templateUrl: './clockcalendar.component.html',
  styleUrls: ['./clockcalendar.component.css']
})
export class ClockcalendarComponent implements OnInit {
  checkClockFormat = true;
  checkDateFormat = true;
  checkClockDate = true;
  nowDate;
  clockFormat = 'HH:mm:ss';
  dateFormat = 'dd.MM.yyy';

  constructor() {

  }
  ngOnInit() {
    setInterval(() => {
      this.nowDate = Date.now();
    }, 1000);
  }

  changeClock () {
      if (this.checkClockFormat) {
        this.clockFormat = 'HH:mm';
        this.checkClockFormat = false;
      } else {
        this.clockFormat = 'HH:mm:ss';
        this.checkClockFormat = true;
      }

      if (this.checkDateFormat) {
        this.dateFormat = 'MM/dd/yy';
        this.checkDateFormat = false;
      } else {
        this.dateFormat = 'dd.MM.yyy';
        this.checkDateFormat = true;
      }

    }

  changeClockDate (event) {
    event.preventDefault(false);
    this.checkClockDate = !this.checkClockDate;
  }
}
