import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoteListComponent } from "./vote-list/vote-list.component";
import { PastTrialsComponent } from "./past-trials/past-trials.component";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { LoginSingupComponent } from "./login-singup/login-singup.component";

const routes: Routes = [
  { path: '', redirectTo: '/votes_list', pathMatch: 'full' },
  { path: 'votes_list', component: VoteListComponent },
  { path: 'past_trials',  component: PastTrialsComponent },
  { path: 'how_it_works', component: HowItWorksComponent },
  { path: 'login_singup', component: LoginSingupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
