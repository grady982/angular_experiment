import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboratoryRoutingModule } from './laboratory-routing.module';
import { LabOneComponent } from './lab-one/lab-one.component';
import { LaboratoryComponent } from './laboratory.component';

import { MatCardModule } from '@angular/material/card';
import { LabTwoComponent } from './lab-two/lab-two.component';
import { PrintLayoutComponent } from './lab-two/print-layout/print-layout.component';


@NgModule({
  declarations: [LabOneComponent, LaboratoryComponent, LabTwoComponent, PrintLayoutComponent],
  imports: [
    CommonModule,
    LaboratoryRoutingModule,
    MatCardModule
  ]
})
export class LaboratoryModule { }
