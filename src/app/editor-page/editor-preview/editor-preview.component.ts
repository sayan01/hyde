import { Component, inject, input } from '@angular/core';
import { HtmlSyncService } from '../html-sync.service';

@Component({
  selector: 'app-editor-preview',
  templateUrl: './editor-preview.component.html',
  styleUrl: './editor-preview.component.scss'
})
export class EditorPreviewComponent {
  html_sync = inject(HtmlSyncService);
}
