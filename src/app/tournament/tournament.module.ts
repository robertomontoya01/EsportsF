import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentLayoutComponent } from './layouts/tournament-layout/tournament-layout.component';
import { TournamentBracketComponent } from './pages/tournament-bracket/tournament-bracket.component';
import { TournamentDetailsComponent } from './pages/tournament-details/tournament-details.component';
import { TournamentPlayersComponent } from './pages/tournament-players/tournament-players.component';
import { MatchModalComponent } from './pages/match-modal/match-modal.component';
import { FormsModule } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    TournamentLayoutComponent,
    TournamentBracketComponent,
    TournamentDetailsComponent,
    TournamentPlayersComponent,
    MatchModalComponent
  ],
  imports: [
    CommonModule,
    TournamentRoutingModule,
    FormsModule,
  ],
  providers: [BsModalService]
})
export class TournamentModule { }
