import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from '@home/pages/main-home/main-home.component';
import { DashboardComponent } from '@home/pages/dashboard/dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { GestionarPedidoComponent } from './pages/gestionar-pedido/gestionar-pedido.component';


@NgModule({
  declarations: [
    MainHomeComponent,
    DashboardComponent,
    GestionarPedidoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
