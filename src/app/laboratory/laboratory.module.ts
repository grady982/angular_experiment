import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { LaboratoryRoutingModule } from './laboratory-routing.module';
import { LabOneComponent } from './lab-one/lab-one.component';
import { LaboratoryComponent } from './laboratory.component';
import { LabTwoComponent } from './lab-two/lab-two.component';
import { PrintLayoutComponent } from './lab-two/print-layout/print-layout.component';
import { ContentAComponent } from './lab-two/content-a/content-a.component';
import { ContentBComponent } from './lab-two/content-b/content-b.component';
import { ContentCComponent } from './lab-two/content-c/content-c.component';


@NgModule({
  declarations: [
    LabOneComponent, 
    LaboratoryComponent, 
    LabTwoComponent, 
    PrintLayoutComponent, 
    ContentAComponent, 
    ContentBComponent, 
    ContentCComponent
  ],
  imports: [
    CommonModule,
    LaboratoryRoutingModule,
    MatCardModule,
    FormsModule,
    MatCheckboxModule
  ]
})
export class LaboratoryModule { }
