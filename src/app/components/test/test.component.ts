import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    {{data}}
  `,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input()
  data: any;

  constructor() {
  }

  ngOnInit() {
  }
}
