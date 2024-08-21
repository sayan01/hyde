import { Component, signal, inject, ViewEncapsulation } from '@angular/core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';

import { HtmlSyncService } from '../html-sync.service';

import Editor from '../../../../ckeditor5'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class EditorComponent {
	public Editor = Editor;

  html = signal('');
  html_sync = inject(HtmlSyncService);

  onChange({ editor }: ChangeEvent) {
    console.log('editor.getData()', editor.getData())
    console.log('html()', this.html())
    const html = editor.getData();
    this.html_sync.push(html);
  }

  ngOnInit(){
    this.html.set(this.html_sync.get());
  }
}
