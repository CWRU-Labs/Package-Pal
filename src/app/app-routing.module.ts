import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PackageComponent } from './package/package.component';

/**
 * Define the routing used by the application. Each page
 * must be defined here for proper navigation.
 */
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'search/:query', component: SearchResultsComponent, canActivate:[AuthGuard] }, 
  { path: 'package/:packageId', component: PackageComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
