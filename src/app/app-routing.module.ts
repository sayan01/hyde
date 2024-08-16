import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home.component';

/**
 * The routes of the application.
 * 
 * Editor Route is lazily loaded.
 * 
 * Preloading is enabled for all modules.
 */

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
