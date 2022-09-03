import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { NewsComponent } from './news/news.component';
import { NewItemComponent } from './new/new-item.component';

import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
    declarations: [
        DashboardComponent,
        NewsComponent,
        NewItemComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule
    ],
})
export class DashboardModule { }