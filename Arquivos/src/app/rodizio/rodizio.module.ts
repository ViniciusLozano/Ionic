import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RodizioPageRoutingModule } from './rodizio-routing.module';

import { RodizioPage } from './rodizio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RodizioPageRoutingModule
  ],
  declarations: [RodizioPage]
})
export class RodizioPageModule {}
