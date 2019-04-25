import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-alert',
  templateUrl: './text-alert.component.html',
  styleUrls: ['./text-alert.component.css']
})
export class TextAlertComponent implements OnInit {

  @Input() form;
  @Input() field : string;
  @Input() invalidField : string;
  @Input() invalidForm;

  constructor() { }

  ngOnInit() {
  }

}
