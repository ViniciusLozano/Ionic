import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RodizioPage } from './rodizio.page';

const routes: Routes = [
  {
    path: '',
    component: RodizioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RodizioPageRoutingModule {}
