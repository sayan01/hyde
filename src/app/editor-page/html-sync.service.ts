import { Injectable, signal } from '@angular/core';
import sanitizeHtml from 'sanitize-html';

let allowedAttributes = { ...sanitizeHtml.defaults.allowedAttributes };

allowedAttributes['*'] = (allowedAttributes['*'] || []).concat([
  'class',
  'style',
]);

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

allowedAttributes['figure'] = (allowedAttributes['figure'] || []).concat([
  'style',
]);

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
  private htmlContent = signal('');
  constructor() {
    const localHtml = localStorage.getItem('html');
    if (localHtml) {
      this.htmlContent.set(localHtml);
    }
  }
  get() {
    return this.htmlContent();
  }
  push(html: string) {
    html = sanitizeHtml(html, {
      allowedAttributes: allowedAttributes,
      allowedTags: allowedTags,
    });
    this.htmlContent.set(html);
    localStorage.setItem('html', html);
  }
}
