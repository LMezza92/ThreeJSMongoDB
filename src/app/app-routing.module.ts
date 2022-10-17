import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HorizonComponent } from './horizon/horizon.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, data: { animation: 'HomePage' } },
  { path: 'contact', component: ContactPageComponent,data: { animation: 'ContactPage' } },
  { path: 'horizon', component: HorizonComponent,data: { animation: 'ContactPage' } },
  { path: 'admin', component: DashboardComponent,data: { animation: 'ContactPage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
