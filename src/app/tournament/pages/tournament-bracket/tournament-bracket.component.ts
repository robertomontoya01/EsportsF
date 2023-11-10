import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MatchModalComponent } from '../match-modal/match-modal.component';

@Component({
  selector: 'app-tournament-bracket',
  templateUrl: './tournament-bracket.component.html',
  styleUrls: ['./tournament-bracket.component.less']
})
export class TournamentBracketComponent {

  receivedData: any;

  constructor(private modalService: BsModalService) {}

  openModal(selectedMatch: any) {

    let matchData = {
      matchId: selectedMatch.match_number,
      tournamentId: '1234567890',
      player1: {
        id: selectedMatch.participants.participant1.id,
        name: selectedMatch.participants.participant1.name,
        score: selectedMatch.results.participant1.score
      },
      player2: {
        id: selectedMatch.participants.participant2.id,
        name: selectedMatch.participants.participant2.name,
        score: selectedMatch.results.participant2.score
      }
    }

    const initialState = {
      matchData: matchData // Pass data to the modal
    };
    const modalRef: BsModalRef = this.modalService.show(MatchModalComponent, { initialState });

    modalRef.content.dataSent.subscribe((newMatchdata: any) => {
      this.receivedData = newMatchdata;
      console.log(this.receivedData);

    });
  }

  rounds = [
    {
      round_number: 1,
      matches: [
        {
          match_number: 1,
          participants: {
            participant1: { id: 1, name: 'John Doe' },
            participant2: { id: 2, name: 'Jane Doe' }
          },
          results: {
            participant1: { score: 2, winner: false },
            participant2: { score: 1, winner: true }
          }
        },
        {
          match_number: 2,
          participants:{
            participant1: { id: 3, name: 'John Doe' },
            participant2: { id: 4, name: 'Jane Doe' }
          },
          results: {
            participant1: { score: 2, winner: true },
            participant2: { score: 1, winner: false }
          }
        },
        {
          match_number: 2,
          participants:{
            participant1: { id: 3, name: 'John Doe' },
            participant2: { id: 4, name: 'Jane Doe' }
          },
          results: {
            participant1: { score: 2, winner: true },
            participant2: { score: 1, winner: false }
          }
        },
        {
          match_number: 2,
          participants:{
            participant1: { id: 3, name: 'John Doe' },
            participant2: { id: 4, name: 'Jane Doe' }
          },
          results: {
            participant1: { score: 2, winner: false },
            participant2: { score: 1, winner: true }
          }
        }
      ]
    },
    {
      round_number: 2,
      matches: [
        {
          match_number: 1,
          participants: {
            participant1: { id: 5, name: 'John Doe' },
            participant2: { id: 6, name: 'Jane Doe' }
          },
          results: {
            participant1: { score: 0, winner: false },
            participant2: { score: 0, winner: false }
          }
        },
        {
          match_number: 1,
          participants: {
            participant1: { id: 5, name: 'John Doe' },
            participant2: { id: 6, name: 'Jane Doe' }
          },
          results: {
            participant1: { score: 0, winner: false },
            participant2: { score: 0, winner: false }
          }
        }
      ]
    },
    {
      round_number: 3,
      matches: [
        {
          match_number: 1,
          participants: {
            participant1: { id: 7, name: 'John Doe' },
            participant2: { id: 8, name: 'Jane Doe' }
          },
          results: {
            participant1: { score: 0, winner: false },
            participant2: { score: 0, winner: false }
          }
        }
      ]
    },
    {
      round_number: 4,
      matches: [
        {
          match_number: 1,
          participants: {
            participant1: { id: 9, name: 'John Doe' },
            participant2: { id: 10, name: 'Jane Doe' }
          },
          results: {
            participant1: { score: 0, winner: true },
            participant2: { score: 0, winner: false }
          }
        }
      ]
    }
  ]




}
