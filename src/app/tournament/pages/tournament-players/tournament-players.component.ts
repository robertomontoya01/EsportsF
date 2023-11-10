import { Component } from '@angular/core';

@Component({
  selector: 'app-tournament-plauers',
  templateUrl: './tournament-players.component.html',
  styleUrls: ['./tournament-players.component.css']
})
export class TournamentPlayersComponent {

  players: any[] = [
    {
      name: 'Player 1',
      profileImage: 'path/to/player1-image.jpg',
      victories: 10,
      defeats: 2
    },
    {
      name: 'Player 2',
      profileImage: 'path/to/player2-image.jpg',
      victories: 8,
      defeats: 4
    },
    {
      name: 'Player 3',
      profileImage: 'path/to/player3-image.jpg',
      victories: 12,
      defeats: 3
    },
    {
      name: 'Player 1',
      profileImage: 'path/to/player1-image.jpg',
      victories: 10,
      defeats: 2
    },
    {
      name: 'Player 2',
      profileImage: 'path/to/player2-image.jpg',
      victories: 8,
      defeats: 4
    },
    {
      name: 'Player 3',
      profileImage: 'path/to/player3-image.jpg',
      victories: 12,
      defeats: 3
    },
    {
      name: 'Player 1',
      profileImage: 'path/to/player1-image.jpg',
      victories: 10,
      defeats: 2
    },
    {
      name: 'Player 2',
      profileImage: 'path/to/player2-image.jpg',
      victories: 8,
      defeats: 4
    },
    {
      name: 'Player 3',
      profileImage: 'path/to/player3-image.jpg',
      victories: 12,
      defeats: 3
    },
    // Add more player data as needed
  ];


}
