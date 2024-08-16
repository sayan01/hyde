import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EditorPageComponent } from './editor-page/editor-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { EditorComponent } from './editor-page/editor/editor.component';
import { EditorPreviewComponent } from './editor-page/editor-preview/editor-preview.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HeaderComponent,
    RouterOutlet,
    EditorPageComponent,
    EditorComponent,
    EditorPreviewComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
