import { Injectable, signal } from '@angular/core';
import sanitizeHtml from 'sanitize-html';

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

// allow image, figure, and div tags
const allowedTags = [
  ...sanitizeHtml.defaults.allowedTags,
  'img',
  'figure',
  'div',
];

@Injectable({
  providedIn: 'root',
})
export class HtmlSyncService {
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
    html = sanitizeHtml(html, {
      allowedAttributes: allowedAttributes,
      allowedTags: allowedTags,
    });
    this.htmlContent.set(html);
    localStorage.setItem('html', html);
  }
}
