import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GestionarPedidoComponent } from './pages/gestionar-pedido/gestionar-pedido.component';
import { MainHomeComponent } from './pages/main-home/main-home.component';


const routes: Routes = [
  {
    path: '',
    component: MainHomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'gestionar-pedido', component: GestionarPedidoComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
