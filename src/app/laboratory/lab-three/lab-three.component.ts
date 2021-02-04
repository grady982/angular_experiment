import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab-three',
  templateUrl: './lab-three.component.html',
  styleUrls: ['./lab-three.component.scss']
})
export class LabThreeComponent implements OnInit {

  progress: number = 100;
  demoForm = new FormGroup({
    image: new FormControl(null, [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

}
