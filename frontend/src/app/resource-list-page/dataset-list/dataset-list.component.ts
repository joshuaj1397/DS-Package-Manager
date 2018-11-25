import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Dataset {
  dataName: string;
  description: string;
}
export interface VersionItem {
  versionName: string;
}

const DATASET_DATA: Dataset[] = [
  {dataName: 'Datset1', description: 'I store stuff!'},
  {dataName: 'Datset2', description: 'I store some stuff!'},
  {dataName: 'Datset3', description: 'I store more stuff!'},
  {dataName: 'Datset4', description: 'I store even more stuff!'},
];

@Component({
  selector: 'app-dataset-list',
  templateUrl: './dataset-list.component.html',
  styleUrls: ['./dataset-list.component.css']
})
export class DatasetListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  uploadSidenavOpened: boolean;
  detailSidenavOpened: boolean;

  displayedColumns: string[] = ['name', 'description'];
  dataSource = DATASET_DATA;
  resourceType = 'Dataset';

  // Detail Algo Sidenav
  selectedDatasetName: string;
  selectedDatasetDesc: string;
  versions: VersionItem[] = [
    {versionName: 'V1'},
    {versionName: 'V2'},
    {versionName: 'V3'},
    {versionName: 'V4'},
  ];
  openDetailSidenav(datsetToOpen, datasetDesc) {
    // Get the single algorithm
    // need name, description, list of versions, and list of permissions
    this.uploadSidenavOpened = false;
    this.detailSidenavOpened = true;
    this.selectedDatasetName = datsetToOpen;
    this.selectedDatasetDesc = datasetDesc;
  }

  // Upload Algo Sidenav
  openUploadSidenav() {
    this.detailSidenavOpened = false;
    this.uploadSidenavOpened = true;
  }

  user: string;
  getAllDatasetsUrl: string = '';
  ngOnInit() {
    this.user = 'jwisor';
    // get list of all algorithms related to jwisor
    // store list in ALGO_DATA

  }

}
