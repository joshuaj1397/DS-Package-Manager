import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HttpClientModule } from '@angular/common/http';
// Components
import { AlgorithmDetailComponent } from './algorithm-detail/algorithm-detail.component';
import { ResourceListPageComponent } from './resource-list-page/resource-list-page.component';
import { DatasetDetailComponent } from './dataset-detail/dataset-detail.component';
import { AlgorithmListComponent } from './resource-list-page/algorithm-list/algorithm-list.component';
import { DatasetListComponent } from './resource-list-page/dataset-list/dataset-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmDetailComponent,
    ResourceListPageComponent,
    DatasetDetailComponent,
    AlgorithmListComponent,
    DatasetListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    MatIconModule,
    FormsModule,
    AngularFileUploaderModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
