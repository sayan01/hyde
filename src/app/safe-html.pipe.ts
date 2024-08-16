import { Component, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Pipe to declare a value as safe HTML
 * Usage:
 *  value | safeHtml
 * Example:
 * <div [innerHtml]="content | safeHtml"></div>
 * Only to be used if the HTML content is trusted and sanitized
*/
@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) { }
  transform(value: string) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}