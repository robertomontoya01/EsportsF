import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CreateTournamentComponent } from './layouts/create-tournament/create-tournament.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component'; // Import OwlModule from ngx-owl-carousel-o

import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './layouts/profile/profile.component';
import { GameTournamentsComponent } from './layouts/game-tournaments/game-tournaments.component';
import { SearchTournamentsComponent } from './layouts/search-tournaments/search-tournaments.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    CreateTournamentComponent,
    DashboardComponent,
    ProfileComponent,
    GameTournamentsComponent,
    SearchTournamentsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
