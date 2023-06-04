import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StarRailComponent } from './pages/star-rail/star-rail.component';
import { HomeRoute, StarRailRoute } from './routes/routes';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: HomeRoute.path
  },
  {
    path: HomeRoute.path,
    title: HomeRoute.title,
    component: HomeComponent,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: StarRailRoute.path,
    title: StarRailRoute.title,
    component: StarRailComponent,
    loadChildren: () =>
      import('./pages/star-rail/star-rail.module').then((m) => m.StarRailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
