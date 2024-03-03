import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { PendingComponent } from './pending/pending.component';
import { CompletedComponent } from './completed/completed.component';
import { InProgressComponent } from './in-progress/in-progress.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },// redirect to `first-component`
  { path: 'home', component: HomeComponent , children: [
    {path:'all', component : AllComponent},
    {path:'pending', component : PendingComponent},
    {path:'completed', component : CompletedComponent},
    {path:'in-progress', component : InProgressComponent}
  ]},  
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
