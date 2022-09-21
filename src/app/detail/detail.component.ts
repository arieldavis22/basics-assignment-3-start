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
    this.count++;
    const num = this.count;
    if (this.canSee) this.canSee = false;
    else this.canSee = true;
    this.clicks.push(num);
  }
}
