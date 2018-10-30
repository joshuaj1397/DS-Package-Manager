import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

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
    ]
})
export class MaterialModule { }