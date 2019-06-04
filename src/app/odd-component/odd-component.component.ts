import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'odd-component',
  templateUrl: './odd-component.component.html',
  styleUrls: ['./odd-component.component.css']
})
export class OddComponentComponent implements OnInit {
  @Input() number: number;
  constructor() { }

  ngOnInit() {
  }

}
