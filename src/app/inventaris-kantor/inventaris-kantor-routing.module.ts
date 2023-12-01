import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarisKantorPage } from './inventaris-kantor.page';

const routes: Routes = [
  {
    path: '',
    component: InventarisKantorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarisKantorPageRoutingModule {}
