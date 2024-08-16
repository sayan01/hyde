import { NgModule } from '@angular/core';
import { EditorPageComponent } from './editor-page.component';
import { EditorComponent } from './editor/editor.component';
import { EditorPreviewComponent } from './editor-preview/editor-preview.component';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { EditorRoutingModule } from './editor-routing.module';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    EditorPageComponent,
    EditorComponent,
    EditorPreviewComponent,
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
