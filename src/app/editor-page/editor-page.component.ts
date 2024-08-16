import { Component, inject } from '@angular/core';
import { EditorComponent } from "./editor/editor.component";
import { EditorPreviewComponent } from "./editor-preview/editor-preview.component";

@Component({
  selector: 'app-editor-page',
  standalone: true,
  imports: [EditorComponent, EditorPreviewComponent],
  templateUrl: './editor-page.component.html',
  styleUrl: './editor-page.component.scss'
})
export class EditorPageComponent {
}
