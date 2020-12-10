import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: []
})
export class LaboratoryComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  printDoc() {
    this.router.navigate(['/laboratory' ,{ outlets: { print: ['print', 'lab2'] }}]).then(() => {
      window.print();
      this.router.navigate(['/laboratory']);
    });
  }

}
