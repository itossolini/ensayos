import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoensayoPage } from './nuevoensayo.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoensayoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoensayoPageRoutingModule {}
