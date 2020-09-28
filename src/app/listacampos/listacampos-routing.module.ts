import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacamposPage } from './listacampos.page';

const routes: Routes = [
  {
    path: '',
    component: ListacamposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListacamposPageRoutingModule {}
