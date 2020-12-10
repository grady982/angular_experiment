import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-two',
  templateUrl: './lab-two.component.html',
  styleUrls: ['./lab-two.component.scss']
})
export class LabTwoComponent implements OnInit {

  targetContent: string;
  contentA = false;
  contentB = false;
  contentC = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cbxChange(target: string) {
    this.targetContent = target;
    switch (target) {
      case 'a':
        this.contentB = this.contentA ? false : this.contentB;
        this.contentC = this.contentA ? false : this.contentC;
        break;
      case 'b':
        this.contentA = this.contentB ? false : this.contentA;
        this.contentC = this.contentB ? false : this.contentC;
        break;
      case 'c':
        this.contentA = this.contentC ? false : this.contentA;
        this.contentB = this.contentC ? false : this.contentB;
        break;
      default:
        break;
    }
  }

  printDoc() {
    console.log(this.targetContent);
    this.router.navigate(['/laboratory' ,{ outlets: { print: ['print', `content-${this.targetContent}`] }}]).then(() => {
      window.print();
      this.router.navigate(['/laboratory']);
    });
  }

}
