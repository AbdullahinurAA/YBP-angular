import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ServicesComponent } from "./services/services.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: '**', component: PageNotFoundComponent },
  { 
    path: 'companies', 
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
    data: {preload: true}
  }

];

@NgModule({
  imports: [    RouterModule.forRoot(
    routes,
    { 
      enableTracing: false, 

    } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
