import { Component, inject, input } from '@angular/core';
import { HtmlSyncService } from '../html-sync.service';

import 'https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image';

/**
 * Editor preview component
 * Displays the HTML preview
 * The html is shared using the HtmlSyncService injection
 * The HTML is sanitized using the sanitizeHtml library.
 * 
 * The safeHtml pipe is used to trust the HTML.
 * 
 * The sanitized and trusted HTML is set as the inner HTML of the div.
 */


@Component({
  selector: 'app-editor-preview',
  templateUrl: './editor-preview.component.html',
  styleUrl: './editor-preview.component.scss'
})
export class EditorPreviewComponent {
  html_sync = inject(HtmlSyncService);
}
