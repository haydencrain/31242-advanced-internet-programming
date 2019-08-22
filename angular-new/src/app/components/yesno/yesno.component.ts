


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yesno',
  templateUrl: './yesno.component.html',
  styleUrls: ['./yesno.component.less']
})
export class YesNoComponent implements OnInit {
  answer = '';

  constructor() {}

  ngOnInit() {}

  onButtonClick(answer) {
    this.answer = answer;
  }
}
