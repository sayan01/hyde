import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { EditorPageComponent } from './editor-page/editor-page.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    'path': '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    'path': 'home',
    component: HomeComponent
  },
  { 
    path: 'editor',
    loadChildren: () => import('./editor-page/editor.module').then(m => m.EditorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
