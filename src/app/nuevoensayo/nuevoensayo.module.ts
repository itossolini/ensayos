import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoensayoPageRoutingModule } from './nuevoensayo-routing.module';

import { NuevoensayoPage } from './nuevoensayo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoensayoPageRoutingModule
  ],
  declarations: [NuevoensayoPage]
})
export class NuevoensayoPageModule {}
