import { Component, OnInit } from '@angular/core';
import * as marked from 'marked';
import * as hljs from 'highlight.js';
import * as prism from 'prismjs';

@Component({
  selector: 'app-lab-one',
  templateUrl: './lab-one.component.html',
  styleUrls: ['./lab-one.component.scss']
})
export class LabOneComponent implements OnInit {

  md = `
## Test Title

I just love **bold text**.
\`code\`

\>  ### Test Blockquotes
\>
\> - test sub content
\> - test sub content
\> content

## TEST IMAGE
![Tux, the Linux mascot](/assets/img/lofibg.jpg)

## TEST CodeBlock
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

  code = `
var gulp = require('gulp');
var myth = require('gulp-myth');

gulp.task('default', function () {
    return gulp.src('src/app.css')
        .pipe(myth())
        .pipe(gulp.dest('dist'));
});
  `;

  mdHTML: string;

  constructor(
  ) { }

  ngOnInit() {
    this.parseMD();
  }

  parseMD() {
    // 解析 markdown syntax
    // reference => https://marked.js.org/using_advanced#options
    // reference 請看 Basic Usage => https://prismjs.com/#examples 
    // https://prismjs.com/
    // If you use that pattern, the <pre> will automatically get the language-xxxx class 
    // (if it doesn’t already have it) and will be styled as a code block.
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code, language) {
        // const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        // return hljs.highlight(validLanguage, code).value;
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
    // 在某些時機點 class language-js 會掉，目前還沒找到優雅的做法...先這樣
    this.mdHTML = this.mdHTML.replace('<pre>', '<pre class="language-js">');
  }

}
