import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { LaboratoryRoutingModule } from './laboratory-routing.module';
import { LabOneComponent } from './lab-one/lab-one.component';
import { LaboratoryComponent } from './laboratory.component';
import { LabTwoComponent } from './lab-two/lab-two.component';
import { PrintLayoutComponent } from './lab-two/print-layout/print-layout.component';
import { ContentAComponent } from './lab-two/content-a/content-a.component';
import { ContentBComponent } from './lab-two/content-b/content-b.component';
import { ContentCComponent } from './lab-two/content-c/content-c.component';
import { LabThreeComponent } from './lab-three/lab-three.component';
import { FileUploadComponent } from './lab-three/file-upload/file-upload.component';
import { LabFourComponent } from './lab-four/lab-four.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LabOneComponent, 
    LaboratoryComponent, 
    LabTwoComponent, 
    PrintLayoutComponent, 
    ContentAComponent, 
    ContentBComponent, 
    ContentCComponent, 
    LabThreeComponent, 
    FileUploadComponent, 
    LabFourComponent
  ],
  imports: [
    CommonModule,
    LaboratoryRoutingModule,
    MatCardModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule
  ]
})
export class LaboratoryModule { }
