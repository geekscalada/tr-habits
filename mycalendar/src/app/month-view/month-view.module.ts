import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthViewPageRoutingModule } from './month-view-routing.module';

import { MonthViewPage } from './month-view.page';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthViewPageRoutingModule,
    HttpClientModule
    
  ],
  declarations: [MonthViewPage]
})
export class MonthViewPageModule {}
