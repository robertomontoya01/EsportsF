import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './search-tournaments.component.html',
  styleUrls: ['./search-tournaments.component.css']
})
export class SearchTournamentsComponent {
  searchForm: FormGroup;
  searchTerm: string = '';

  // Mock data for games and tournaments
  games: any[] = [
    {
      title: 'Counter-Strike: Global Offensive',
      description: 'Competitive first-person shooter.',
      imageUrl: 'assets/images/csgo.png',
    },
    {
      title: 'League of Legends',
      description: 'Multiplayer online battle arena game.',
      imageUrl: 'assets/images/lol.jpg',
    },
    {
      title: 'Dota 2',
      description: 'Strategy-based multiplayer game.',
      imageUrl: 'assets/images/dota2.jpg',
    },
    {
      title: 'Tekken 7',
      description: 'The best fighting game ever.',
      imageUrl: 'assets/images/tekken7.jpg',
    }
  ];

  tournaments: any[] = [
    {
      title: 'Summer Championship',
      game: 'Counter-Strike: Global Offensive',
      date: '2023-08-15',
      imageUrl: 'assets/images/tournament1.png',
    },
    {
      title: 'League of Legends World Finals',
      game: 'League of Legends',
      date: '2023-11-05',
      imageUrl: 'assets/images/tournament2.jpg',
    },
    {
      title: 'Dota 2 International',
      game: 'Dota 2',
      date: '2023-09-30',
      imageUrl: 'assets/images/tournament3.jpg',
    },
  ];

  filteredGames: any[] = this.games;
  filteredTournaments: any[] = this.tournaments;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      searchTerm: [''],
    });
  }

  search() {
    this.searchTerm = this.searchForm.get('searchTerm')?.value;
    // Filter games and tournaments based on the search term
    this.filteredGames = this.games.filter((game) =>
      game.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.filteredTournaments = this.tournaments.filter((tournament) =>
      tournament.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
