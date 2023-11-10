import { GameTournamentsComponent } from './layouts/game-tournaments/game-tournaments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { CreateTournamentComponent } from './layouts/create-tournament/create-tournament.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { SearchTournamentsComponent } from './layouts/search-tournaments/search-tournaments.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      {path: '', component: DashboardLayoutComponent},
      {path: 'create-tournament', component: CreateTournamentComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'game', component: GameTournamentsComponent},
      {path: 'search', component: SearchTournamentsComponent},
      {path: '**', redirectTo: ''}
    ]
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
