import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MatIconModule } from '@angular/material';
// Components
import { AlgorithmDetailComponent } from './algorithm-detail/algorithm-detail.component';
import { ResourceListPageComponent } from './resource-list-page/resource-list-page.component';
import { DatasetDetailComponent } from './dataset-detail/dataset-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmDetailComponent,
    ResourceListPageComponent,
    DatasetDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
