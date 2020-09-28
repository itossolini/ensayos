import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListacamposPageRoutingModule } from './listacampos-routing.module';

import { ListacamposPage } from './listacampos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListacamposPageRoutingModule
  ],
  declarations: [ListacamposPage]
})
export class ListacamposPageModule {}
