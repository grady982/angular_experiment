import { Component, Input, OnInit } from '@angular/core';
import * as marked from 'marked';
import * as hljs from 'highlight.js';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements OnInit {

  @Input() markdownString: string;

  constructor() { }

  ngOnInit() {
    // 解析 markdown syntax
    // reference => https://marked.js.org/using_advanced#options
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code, language) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
      },
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
    this.markdownString = marked(this.markdownString);
  }

}
