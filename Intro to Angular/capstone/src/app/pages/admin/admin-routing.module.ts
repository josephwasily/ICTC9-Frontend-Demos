import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/lib/components/layout/layout.component';

const routes: Routes = [
  {path:'', component: LayoutComponent, children: [  {path:'', component: DashboardComponent, pathMatch: 'full' }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
