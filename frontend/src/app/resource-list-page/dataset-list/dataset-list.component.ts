import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatSnackBar} from '@angular/material';

export interface Dataset {
  dataName: string;
  description: string;
}
export interface VersionItem {
  versionName: string;
}
export interface PermissionItem {
  name: string;
}


@Component({
  selector: 'app-dataset-list',
  templateUrl: './dataset-list.component.html',
  styleUrls: ['./dataset-list.component.css']
})
export class DatasetListComponent implements OnInit {

  constructor(private http: HttpClient, public snackBar: MatSnackBar) { }
  
  DATASET_DATA: Dataset[] = [
    { dataName: 'Datset1', description: 'I am a dataset that stores stuff.' },
    { dataName: 'Datset2', description: 'I store some stuff!' },
    { dataName: 'Datset3', description: 'I store more stuff!' },
    { dataName: 'Datset4', description: 'I store even more stuff!' },
  ];

  // DATASET_DATA = {
  //   data : [
  //     { dataName: 'Datset1', description: 'I am a dataset that stores stuff.' },
  //     { dataName: 'Datset2', description: 'I store some stuff!' },
  //     { dataName: 'Datset3', description: 'I store more stuff!' },
  //     { dataName: 'Datset4', description: 'I store even more stuff!' },
  //   ]
  // };
  currentLeftSidenav: string;
  currentRightSidenav: string = "createNew";
  uploadSidenavOpened: boolean;
  detailSidenavOpened: boolean;

  displayedColumns: string[] = ['name', 'description'];
  //dataSource = new MatTableDataSource<Dataset>();
  dataSource = this.DATASET_DATA;
  resourceType = 'Dataset';


  // Detail Dataset Sidenav
  selectedDatasetName: string;
  selectedDatasetDesc: string;
  versions: VersionItem[] = [
    { versionName: 'V1' },
    { versionName: 'V2' },
    { versionName: 'V3' },
    { versionName: 'V4' },
  ];
  openDetailSidenav(datsetToOpen, datasetDesc) {
    // Get the single dataset
    // need name, description, list of versions, and list of permissions
    this.currentLeftSidenav = 'detail';
    this.uploadSidenavOpened = false;
    this.detailSidenavOpened = true;
    this.selectedDatasetName = datsetToOpen;
    this.selectedDatasetDesc = datasetDesc;
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
    this.snackBar.open(this.selectedDatasetName + " - Downloading", "CLOSE", {
      duration: 4000,
    });
  }

  // Version Dataset Sidenav
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

  createNewDataset(name, description) {
    let newDataset: Dataset = { dataName: name, description: description };
    this.DATASET_DATA.push(newDataset);
    this.dataSource = this.DATASET_DATA;
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
  getAllDatasetsUrl: string = '';
  ngOnInit() {
    this.user = 'jwisor';
    // get list of all algorithms related to jwisor
    // store list in ALGO_DATA

  }

}
