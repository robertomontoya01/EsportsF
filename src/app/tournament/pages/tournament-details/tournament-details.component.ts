import { Component } from '@angular/core';

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent {

  tournamentData: any = {
    game: "",
    format: "",
    startDate: "",
    endDate: ""
  }

  ngOnInit() {
    // Fetch tournament details using a service
    // this.tournamentService.getTournamentDetails().subscribe(data => {
      // this.tournamentData = data;

      // If your data structure is an object with properties, you can use them like this:
      this.tournamentData.game = "Tekken";
      this.tournamentData.format = "Double Elimination";
      this.tournamentData.startDate = "2021-05-01";
      this.tournamentData.endDate = "2021-05-01";
  }


}
