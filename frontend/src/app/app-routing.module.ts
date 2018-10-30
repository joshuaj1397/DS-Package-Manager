import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ResourceListPageComponent } from './resource-list-page/resource-list-page.component';
import { AlgorithmDetailComponent } from './algorithm-detail/algorithm-detail.component';
import { DatasetDetailComponent } from './dataset-detail/dataset-detail.component';

const routes: Routes = [
  { path: '', component: ResourceListPageComponent },
  { path: 'algorithmDetail', component: AlgorithmDetailComponent },
  { path: 'datasetDetail', component: DatasetDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}