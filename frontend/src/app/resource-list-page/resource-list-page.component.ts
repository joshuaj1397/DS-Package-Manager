import { Component } from '@angular/core';


@Component({
  selector: 'app-resource-list-page',
  templateUrl: './resource-list-page.component.html',
  styleUrls: ['./resource-list-page.component.css']
})
export class ResourceListPageComponent {

  constructor() { }

  User = 'jwisor';
  resourceType = 'ALGORITHM';
  navLinks = [
    {label : 'ALGORITHM', path : 'algorithms'}, 
    {label : 'DATASET', path : 'datasets'}
  ];

  navDetailedAlgo(row) {
    // we will send id (in this case the name of the element) and hit the database using
    // the id (name) to look up the information that will go on that page
    console.log(row.name);
  }
}
