
export interface MatchModalInterface {

  matchId: string;
  tournamentId: string;

  player1: {
    id: string;
    name: string;
    score: number;
  };

  player2: {
    id: string;
    name: string;
    score: number;
  };

}
