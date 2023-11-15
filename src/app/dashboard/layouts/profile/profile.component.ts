import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  TournamentsRecord = [
    {
      title: 'Tournament Record 1',
      imageUrl: 'path/to/tournament1-image.jpg',
      date: '2023-11-10',
      game: 'Your Game',
      info: 'Your info',
      data: 'Your data',
    },
    {
      title: 'Tournament Record 2',
      imageUrl: 'path/to/tournament1-image.jpg',
      date: '2023-11-10',
      game: 'Your Game',
      info: 'Your info',
      data: 'Your data',
    },
    {
      title: 'Tournament Record 3',
      imageUrl: 'path/to/tournament1-image.jpg',
      date: '2023-11-10',
      game: 'Your Game',
      info: 'Your info',
      data: 'Your data',
    },
    {
      title: 'Tournament Record 4',
      imageUrl: 'path/to/tournament1-image.jpg',
      date: '2023-11-10',
      game: 'Your Game',
      info: 'Your info',
      data: 'Your data',
    },

  ]

}
