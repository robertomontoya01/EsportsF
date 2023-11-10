import { Component } from '@angular/core';

@Component({
  templateUrl: './tournament-layout.component.html',
  styleUrls: ['./tournament-layout.component.css']
})
export class TournamentLayoutComponent {

  activeButton: string = 'details';

  setActiveButton(buttonName: string) {
    this.activeButton = buttonName;
  }

}
