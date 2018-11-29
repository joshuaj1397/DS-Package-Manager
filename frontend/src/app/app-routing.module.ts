import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ResourceListPageComponent } from './resource-list-page/resource-list-page.component';
import { AlgorithmListComponent } from './resource-list-page/algorithm-list/algorithm-list.component';
import { DatasetListComponent } from './resource-list-page/dataset-list/dataset-list.component';

const routes: Routes = [
  { path: '', component: AlgorithmListComponent },
  { path: 'algorithms', component: AlgorithmListComponent },
  { path: 'datasets', component: DatasetListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}