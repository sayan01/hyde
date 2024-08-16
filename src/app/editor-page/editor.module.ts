import { NgModule } from '@angular/core';
import { EditorPageComponent } from './editor-page.component';
import { EditorComponent } from './editor/editor.component';
import { EditorPreviewComponent } from './editor-preview/editor-preview.component';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { EditorRoutingModule } from './editor-routing.module';
import { SafeHtmlPipe } from '../safe-html.pipe';

/**
 * Editor Module
 * Components for the editor page:
 * - EditorPageComponent
 *     L EditorComponent - wrapper on CKEditor
 *     L EditorPreviewComponent - displays the HTML preview
 * The html is shared using the HtmlSyncService injection
 */

@NgModule({
  declarations: [
    EditorPageComponent,
    EditorComponent,
    EditorPreviewComponent,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule,
    EditorRoutingModule,
  ],
  exports: [
    EditorPageComponent,
  ]
})
export class EditorModule {}
