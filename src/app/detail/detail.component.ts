import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  canSee = false;
  clicks = [];
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  onClick(e) {
    this.canSee = !this.canSee;
    // this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date());
  }

  getColor(num) {
    return num >= 4 ? 'blue' : '';
  }
}
