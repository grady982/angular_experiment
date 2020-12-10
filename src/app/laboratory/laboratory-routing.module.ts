import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabOneComponent } from './lab-one/lab-one.component';
import { LabTwoComponent } from './lab-two/lab-two.component';
import { PrintLayoutComponent } from './lab-two/print-layout/print-layout.component';
import { LaboratoryComponent } from './laboratory.component';


const routes: Routes = [
  {
    path: '', component: LaboratoryComponent,
    children: [
      { path: 'lab1', component: LabOneComponent }
    ]
  },
  {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'lab2', component: LabTwoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoryRoutingModule { }
