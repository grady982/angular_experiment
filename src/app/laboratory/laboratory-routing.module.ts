import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabFourComponent } from './lab-four/lab-four.component';
import { LabOneComponent } from './lab-one/lab-one.component';
import { LabThreeComponent } from './lab-three/lab-three.component';
import { ContentAComponent } from './lab-two/content-a/content-a.component';
import { ContentBComponent } from './lab-two/content-b/content-b.component';
import { ContentCComponent } from './lab-two/content-c/content-c.component';
import { LabTwoComponent } from './lab-two/lab-two.component';
import { PrintLayoutComponent } from './lab-two/print-layout/print-layout.component';
import { LaboratoryComponent } from './laboratory.component';


const routes: Routes = [
  {
    path: '', component: LaboratoryComponent,
    children: [
      { path: 'lab1', component: LabOneComponent },
      { path: 'lab2', component: LabTwoComponent },
      { path: 'lab3', component: LabThreeComponent },
      { path: 'lab4', component: LabFourComponent }
    ]
  },
  {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'content-a', component: ContentAComponent },
      { path: 'content-b', component: ContentBComponent },
      { path: 'content-c', component: ContentCComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoryRoutingModule { }
