import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentLayoutComponent } from './layouts/tournament-layout/tournament-layout.component';
import { TournamentBracketComponent } from './pages/tournament-bracket/tournament-bracket.component';
import { TournamentDetailsComponent } from './pages/tournament-details/tournament-details.component';
import { TournamentPlayersComponent } from './pages/tournament-players/tournament-players.component';

const routes: Routes = [
  {
    path: '',
    component: TournamentLayoutComponent,
    children: [
      { path: '', component: TournamentDetailsComponent},
      { path: 'details', component: TournamentDetailsComponent},
      { path: 'bracket', component: TournamentBracketComponent},
      { path: 'players', component: TournamentPlayersComponent},
      { path: '**', redirectTo: 'details'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentRoutingModule { }
