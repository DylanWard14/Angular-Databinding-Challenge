import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'even-component',
  templateUrl: './even-component.component.html',
  styleUrls: ['./even-component.component.css']
})
export class EvenComponentComponent implements OnInit {
  @Input() number:number;
  constructor() { }

  ngOnInit() {
  }

}
