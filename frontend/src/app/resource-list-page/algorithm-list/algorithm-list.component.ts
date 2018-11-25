import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Algorithm {
  algoName: string;
  description: string;
}
export interface VersionItem {
  versionName: string;
}
export interface PermissionItem {
  name: string;
}

const ALGO_DATA: Algorithm[] = [
  {algoName: 'Algorithm1', description: 'I do stuff!'},
  {algoName: 'Algorithm2', description: 'I do other stuff!'},
  {algoName: 'Algorithm3', description: 'I do more stuff!'},
  {algoName: 'Algorithm4', description: 'I do a lot of stuff!'},
];

@Component({
  selector: 'app-algorithm-list',
  templateUrl: './algorithm-list.component.html',
  styleUrls: ['./algorithm-list.component.css']
})
export class AlgorithmListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  uploadSidenavOpened: boolean;
  detailSidenavOpened: boolean;

  displayedColumns: string[] = ['algoName', 'description'];
  dataSource = ALGO_DATA;
  resourceType = 'Algorithm';

  // Detail Algo Sidenav
  selectedAlgoName: string;
  selectedAlgoDesc: string;
  versions: VersionItem[] = [
    {versionName: 'V1'},
    {versionName: 'V2'},
    {versionName: 'V3'},
    {versionName: 'V4'},
  ];
  permissions: PermissionItem[] = [
    {name: 'Joe'},
    {name: 'Josh'},
    {name: 'Adriana'},
    {name: 'Justin'},
  ]
  openDetailSidenav(algoToOpen, algoDesc) {
    // Get the single algorithm
    // need name, description, list of versions, and list of permissions
    this.uploadSidenavOpened = false;
    this.detailSidenavOpened = true;
    this.selectedAlgoName = algoToOpen;
    this.selectedAlgoDesc = algoDesc;
  }

  // Upload Algo Sidenav
  openUploadSidenav() {
    this.detailSidenavOpened = false;
    this.uploadSidenavOpened = true;
  }

  user: string;
  getAllAlgorithmsUrl: string = '';
  ngOnInit() {
    this.user = 'jwisor';
    // get list of all algorithms related to jwisor
    // store list in ALGO_DATA

  }

}
