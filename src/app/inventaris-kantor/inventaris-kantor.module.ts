import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarisKantorPageRoutingModule } from './inventaris-kantor-routing.module';

import { InventarisKantorPage } from './inventaris-kantor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarisKantorPageRoutingModule
  ],
  declarations: [InventarisKantorPage]
})
export class InventarisKantorPageModule {}
