import { Component, OnInit } from '@angular/core';

export interface Version {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  resource: string;
}

const ELEMENT_DATA_ALGO: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', resource: 'Algorithm' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', resource: 'Algorithm' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', resource: 'Algorithm' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', resource: 'Algorithm' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', resource: 'Algorithm' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', resource: 'Algorithm' }
];

@Component({
  selector: 'app-dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.css']
})
export class DatasetDetailComponent implements OnInit {

  constructor() { }

  datasetName = "Joseph's Dataset";
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA_ALGO;

  versions: Version[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  ngOnInit() {
  }
  
  test() {

  }

}
