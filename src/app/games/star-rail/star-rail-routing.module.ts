import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarRailComponent } from './star-rail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StarRailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarRailRoutingModule { }
