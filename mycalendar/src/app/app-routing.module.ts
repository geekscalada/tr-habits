import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CallingFromFontComponent } from './app/calling-from-font/calling-from-font.component';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pruebagoogle',
    component: CallingFromFontComponent,
    pathMatch: 'full'
  },   
  {
    path: 'month',
    loadChildren: () => import('./month-view/month-view.module').then( m => m.MonthViewPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
