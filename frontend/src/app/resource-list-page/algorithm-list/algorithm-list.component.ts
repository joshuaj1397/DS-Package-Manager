import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

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

  constructor(private http: HttpClient, public snackBar: MatSnackBar) { }
  
  ALGORITHM_DATA: Algorithm[] = [
    { algoName: 'Algorithm 1', description: 'I do stuff!' },
    { algoName: 'Algorithm 2', description: 'I do more stuff!' },
    { algoName: 'Algorihtm 3', description: 'I accomplish many things!' },
    { algoName: 'Algorithm 4', description: 'I do some stuff.' },
  ];

  currentLeftSidenav: string;
  currentRightSidenav: string = "createNew";
  uploadSidenavOpened: boolean;
  detailSidenavOpened: boolean;

  displayedColumns: string[] = ['name', 'description'];
  //dataSource = new MatTableDataSource<Algorithm>();
  dataSource = this.ALGORITHM_DATA;
  resourceType = 'Algorithm';


  // Detail Algorithm Sidenav
  selectedAlgorithmName: string;
  selectedAlgorithmDesc: string;
  versions: VersionItem[] = [
    { versionName: 'V1' },
    { versionName: 'V2' },
    { versionName: 'V3' },
    { versionName: 'V4' },
  ];
  openDetailSidenav(algorithmToOpen, algorithmDesc) {
    // Get the single algorithm
    // need name, description, list of versions, and list of permissions
    this.currentLeftSidenav = 'detail';
    this.uploadSidenavOpened = false;
    this.detailSidenavOpened = true;
    this.selectedAlgorithmName = algorithmToOpen;
    this.selectedAlgorithmDesc = algorithmDesc;
  }

  addVersion() {
    this.uploadSidenavOpened = true;
    this.currentRightSidenav = 'createVersion';
  }

  createNewVersion(name: string, verName: string) {
    this.uploadSidenavOpened = false;
    this.selectedDataVersionName = "";
    this.openSnackBar(name, verName);
  }

  openSnackBar(name: string, verName: string) {
    this.snackBar.open(verName + " - Created", "CLOSE", {
      duration: 4000,
    });
  }

  openDownloadSnackBar(name: string, verName: string) {
    this.snackBar.open(this.selectedAlgorithmName + " - Downloading", "CLOSE", {
      duration: 4000,
    });
  }

  // Version Algorithm Sidenav
  selectedDataVersionName: string;
  openVersion(versionName) {
    this.uploadSidenavOpened = false;
    this.currentLeftSidenav = 'version';
    this.selectedDataVersionName = versionName;
  }


  // Upload Algo Sidenav
  openUploadSidenav() {
    this.detailSidenavOpened = false;
    this.uploadSidenavOpened = true;
  }

  createNewAlgorithm(name, description) {
    let newAlgorithm: Algorithm = { algoName: name, description: description };
    this.ALGORITHM_DATA.push(newAlgorithm);
    this.dataSource = this.ALGORITHM_DATA;
    this.uploadSidenavOpened = false;
    this.selectedDataVersionName = "";
    this.openSnackBar(name, name);
  } 

  permissions: PermissionItem[] = [
    {name: 'Joe'},
    {name: 'Josh'},
    {name: 'Adriana'},
    {name: 'Justin'},
  ]

  user: string;
  getAllAlgorithmsUrl: string = '';
  ngOnInit() {
    this.user = 'jwisor';
    // get list of all algorithms related to jwisor
    // store list in ALGO_DATA

  }

}
