import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'listacampos',
    children: [{
      path:"",
      loadChildren: () => import('./listacampos/listacampos.module').then(m => m.ListacamposPageModule)
    },
      {
      path: ":id",
      loadChildren: () => import('./ensayo/ensayo.module').then( m => m.EnsayoPageModule)
      }
    ]
    
  },
  {
    path: 'ensayo',
    loadChildren: () => import('./ensayo/ensayo.module').then( m => m.EnsayoPageModule)
  },
  {
    path: 'nuevoensayo',
    loadChildren: () => import('./nuevoensayo/nuevoensayo.module').then( m => m.NuevoensayoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }