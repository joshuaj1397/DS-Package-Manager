import {MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule, MatList} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [ 
        MatButtonModule, 
        MatCheckboxModule ,
        MatToolbarModule,
        MatMenuModule,
        MatTableModule,
        MatButtonToggleModule,
        MatSelectModule,
        MatCardModule,
        MatTabsModule,
        MatGridListModule,
        MatListModule,
        MatButtonModule,
        MatSidenavModule,
        MatInputModule,
        MatDividerModule,
        MatSnackBarModule,
    ],
    exports: [ 
        MatButtonModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatMenuModule,
        MatTableModule,
        MatButtonToggleModule,
        MatSelectModule,
        MatCardModule,
        MatTabsModule,
        MatGridListModule,
        MatListModule,
        MatButtonModule,
        MatSidenavModule,
        MatInputModule,
        MatDividerModule,
        MatSnackBarModule,
    ]
})
export class MaterialModule { }