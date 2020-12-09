import { AfterViewChecked, Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import * as marked from 'marked';
import * as hljs from 'highlight.js';
import * as prism from 'prismjs';

@Component({
  selector: 'app-lab-one',
  templateUrl: './lab-one.component.html',
  styleUrls: ['./lab-one.component.scss']
})
export class LabOneComponent implements OnInit, AfterViewInit {

  md = `
## Test Title

I just love **bold text**.
\`code\`

\>  ### Test Blockquotes
\>
\> - test sub content
\> - test sub content
\> content

\`\`\`js
var gulp = require('gulp');
var myth = require('gulp-myth');

gulp.task('default', function () {
    return gulp.src('src/app.css')
        .pipe(myth())
        .pipe(gulp.dest('dist'));
});
\`\`\`


## TEST IMAGE
![Tux, the Linux mascot](/assets/img/lofibg.jpg)
  `;

  code = `
\`\`\`js
var gulp = require('gulp');
var myth = require('gulp-myth');

gulp.task('default', function () {
    return gulp.src('src/app.css')
        .pipe(myth())
        .pipe(gulp.dest('dist'));
});
\`\`\`
  `;

  mdHTML: string;

  constructor(
  ) { }

  ngOnInit() {
    this.parseMD();
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.parseMD();
    // });
  }

  parseMD() {
    // 解析 markdown syntax
    // reference => https://marked.js.org/using_advanced#options
    // reference 請看 Basic Usage => https://prismjs.com/#examples 
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code, language) {
        // const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        // return hljs.highlight(validLanguage, code).value;
        console.log([code, language]);
        return prism.highlight(code, prism.languages[language], language);
      },
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
    this.mdHTML = marked(this.md);
    console.log('==== parse md string ====');
    console.log(this.mdHTML);
  }

}
