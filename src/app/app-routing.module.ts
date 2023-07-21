import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StarRailComponent } from './pages/star-rail/star-rail.component';
import { DummyRouteComponent } from './routes/dummy-route.component';
import { DummyRoute, HomeRoute, StarRailRoute } from './routes/routes';

const routes: Routes = [
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
  },
  {
    path: DummyRoute.path,
    component: DummyRouteComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: HomeRoute.path
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
