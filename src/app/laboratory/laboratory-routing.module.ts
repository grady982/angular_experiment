import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabOneComponent } from './lab-one/lab-one.component';
import { LaboratoryComponent } from './laboratory.component';


const routes: Routes = [
  {
    path: '', component: LaboratoryComponent,
    children: [
      { path: 'lab1', component: LabOneComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoryRoutingModule { }
