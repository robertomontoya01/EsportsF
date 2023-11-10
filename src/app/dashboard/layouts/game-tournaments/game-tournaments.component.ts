import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './game-tournaments.component.html',
  styleUrls: ['./game-tournaments.component.css']
})
export class GameTournamentsComponent {

  private router = inject( Router );

  constructor() {
    console.log("GameTournamentsComponent constructor");
  }

  upcomingTournaments: any[] = [
    {
      title: 'Upcoming Tournament 1',
      imageUrl: 'path/to/tournament1-image.jpg',
      date: '2023-11-10',
      game: 'Your Game',
    },
    {
      title: 'Upcoming Tournament 1',
      imageUrl: 'path/to/tournament1-image.jpg',
      date: '2023-11-10',
      game: 'Your Game',
    },
    {
      title: 'Upcoming Tournament 1',
      imageUrl: 'path/to/tournament1-image.jpg',
      date: '2023-11-10',
      game: 'Your Game',
    },
    {
      title: 'Upcoming Tournament 1',
      imageUrl: 'path/to/tournament1-image.jpg',
      date: '2023-11-10',
      game: 'Your Game',
    },
    // Add more upcoming tournaments
  ];

  oldTournaments: any[] = [
    {
      title: 'Upcoming Tournament 1',
      imageUrl: 'path/to/tournament1-image.jpg',
      date: '2023-11-10',
      game: 'Your Game',
    },
    {
      title: 'Upcoming Tournament 1',
      imageUrl: 'path/to/tournament1-image.jpg',
      date: '2023-11-10',
      game: 'Your Game',
    },
    {
      title: 'Upcoming Tournament 1',
      imageUrl: 'path/to/tournament1-image.jpg',
      date: '2023-11-10',
      game: 'Your Game',
    },
    // Add more old tournaments
  ];


  gotoRoute(route: string) {
    this.router.navigateByUrl(route);
  }

}
