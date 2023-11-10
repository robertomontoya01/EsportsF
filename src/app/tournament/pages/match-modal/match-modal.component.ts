import { AuthService } from 'src/app/auth/services/auth.service';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MatchModalInterface } from 'src/app/auth/interfaces/match-modal.interface';

@Component({
  selector: 'app-match-modal',
  templateUrl: './match-modal.component.html',
  styleUrls: ['./match-modal.component.css']
})
export class MatchModalComponent {

  @Input() matchData: MatchModalInterface | undefined; // Input property to receive data from the parent
  @Output() dataSent = new EventEmitter<MatchModalInterface>();

  player1score: number = 0;

  AuthService = inject(AuthService);

  isAdmin = false;

  constructor(public bsModalRef: BsModalRef) {

    console.log(this.AuthService.currentUser());


    if (this.AuthService.currentUser()?.roles.includes("admin")) {
      this.isAdmin = true;
    }

  }

  sendData() {
    this.dataSent.emit(this.matchData);
    this.bsModalRef.hide();
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
