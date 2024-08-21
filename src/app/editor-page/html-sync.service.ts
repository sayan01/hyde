import { Injectable, signal } from '@angular/core';
import sanitizeHtml from 'sanitize-html';

import { JSDOM } from 'jsdom';



let allowedAttributes = { ...sanitizeHtml.defaults.allowedAttributes };

// Add the class and style attribute to all elements
allowedAttributes['*'] = (allowedAttributes['*'] || []).concat([
  'class',
  'style',
]);

// Add image attributes
allowedAttributes['img'] = (allowedAttributes['img'] || []).concat([
  'src',
  'style',
  'srcset',
  'alt',
  'title',
  'width',
  'height',
  'loading',
]);

const mathmlTags = [
  'math',
'maction',
'annotation',
'annotation-xml',
'menclose',
'merror',
'mfenced',
'mfrac',
'mi',
'mmultiscripts',
'mn',
'mo',
'mover',
'mpadded',
'mphantom',
'mprescripts',
'mroot',
'mrow',
'ms',
'semantics',
'mspace',
'msqrt',
'mstyle',
'msub',
'msup',
'msubsup',
'mtable',
'mtd',
'mtext',
'mtr',
'munder',
'munderover',
];

// allow image, figure, and div tags
const allowedTags = [
  ...sanitizeHtml.defaults.allowedTags,
  ...mathmlTags,
  'img',
  'figure',
  'div',
];

const mathjaxConfig = {
  loader: { load: ['input/mathml', 'output/svg'] },
  svg: {
    fontCache: 'none'
  }
};


@Injectable({
  providedIn: 'root',
})
export class HtmlSyncService {
  // Function to convert MathML to SVG
  
  private htmlContent = signal(''); // signal to store current html content
  /**
    * Constructor
    * Load the html content from local storage
    * if it exists
  */
  constructor() {
    const localHtml = localStorage.getItem('html');
    if (localHtml) {
      // if localhost data exists, load it to component
      this.htmlContent.set(localHtml);
    }
  }
  /**
   * Get the html content from the service
   * @returns {string} - the current html content
   */
  get() {
    return this.htmlContent();
  }
  /**
   * Takes a update of html content
   * Sanitize the html content
   * using the sanitize-html library
   * then update it in memory and local storage
   */
  push(html: string) {
    let old = html;
    html = sanitizeHtml(html, {
      allowedAttributes: allowedAttributes,
      allowedTags: allowedTags,
    });
    this.htmlContent.set(html);
    localStorage.setItem('html', html);
  }
}
