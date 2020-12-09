import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboratoryRoutingModule } from './laboratory-routing.module';
import { LabOneComponent } from './lab-one/lab-one.component';
import { LaboratoryComponent } from './laboratory.component';

import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [LabOneComponent, LaboratoryComponent],
  imports: [
    CommonModule,
    LaboratoryRoutingModule,
    MatCardModule
  ]
})
export class LaboratoryModule { }
