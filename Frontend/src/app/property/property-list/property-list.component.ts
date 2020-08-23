import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Type": "Income House Unit",
      "Price": 13000
    },
    {
      "Id": 2,
      "Type": "River View Villa",
      "Price": 10000
    },
    {
      "Id": 3,
      "Type": "Mountain View Apartment",
      "Price": 28000
    },
    {
      "Id": 4,
      "Type": "Own Enternace House",
      "Price": 900
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
