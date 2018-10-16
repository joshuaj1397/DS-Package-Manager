import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  resource: string;
}

const ELEMENT_DATA_ALGO: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', resource: 'Algorithm'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', resource: 'Algorithm'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', resource: 'Algorithm'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', resource: 'Algorithm'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', resource: 'Algorithm'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', resource: 'Algorithm'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', resource: 'Algorithm'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', resource: 'Algorithm'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', resource: 'Algorithm'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', resource: 'Algorithm'},
];

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'resource'];
  dataSource = ELEMENT_DATA_ALGO;
  resourceType = 'Algorithm';

}
