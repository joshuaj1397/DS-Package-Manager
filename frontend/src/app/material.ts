import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [ 
        MatButtonModule, 
        MatCheckboxModule ,
        MatToolbarModule,
        MatMenuModule,
        MatTableModule,
        MatButtonToggleModule
    ],
    exports: [ 
        MatButtonModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatMenuModule,
        MatTableModule,
        MatButtonToggleModule
    ]
})
export class MaterialModule { }