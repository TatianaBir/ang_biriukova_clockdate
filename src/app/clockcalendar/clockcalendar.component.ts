import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clockcalendar',
  templateUrl: './clockcalendar.component.html',
  styleUrls: ['./clockcalendar.component.css']
})
export class ClockcalendarComponent implements OnInit {
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
    this.clockFormat = this.clockFormat === 'HH:mm' ? 'HH:mm:ss' : 'HH:mm';
    this.dateFormat = this.dateFormat === 'MM/dd/yy' ? 'dd.MM.yyy' : 'MM/dd/yy';
    }

  changeClockDate (event) {
    event.preventDefault(false);
    this.checkClockDate = !this.checkClockDate;
  }
}
