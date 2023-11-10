import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.css']
})
export class CreateTournamentComponent {

  private fb = inject( FormBuilder );
  private authService = inject( AuthService );
  private router = inject( Router );

  public tournamentForm = this.fb.group({
    tournamentName: ['', Validators.required],
    gameTitle: ['', Validators.required],
    date: ['', Validators.required],
    singleDayTournament: [true], // Set to true by default
    endDate: ['',], // Add endDate control
    tournamentDescription: ['', Validators.required], // Add tournamentDescription options
    tournamentFormat: ['', Validators.required], // Add tournamentFormat options
    location: ['', Validators.required], // Add location options

    registrationType: ['individual'], // Valor predeterminado
    maxPlayers: [''], // Agrega este campo
    manualInstructions: [''], // Agrega este campo
    playerList: this.fb.array([]) // Agrega este campo
  });

  onRegistrationTypeChange(selectElement: any) {
    const maxPlayersControl = this.tournamentForm.get('maxPlayers');
    const manualInstructionsControl = this.tournamentForm.get('manualInstructions');
    const selectedValue = selectElement.value; // Acceso al valor seleccionado


    if (selectedValue === 'individual') {
      maxPlayersControl?.enable();
      maxPlayersControl?.setValidators(Validators.required);
      manualInstructionsControl?.disable();
      manualInstructionsControl?.setValue('');
    } else if (selectedValue === 'manual') {
      maxPlayersControl?.disable();
      maxPlayersControl?.setValue('');
      manualInstructionsControl?.enable();
      manualInstructionsControl?.setValidators(Validators.required);
    } else {
      // Handle other cases or validations as needed
    }
  }


  constructor() {
    console.log("Hola");

        // Subscribe to changes in the "singleDayTournament" control to toggle the "endDate" field's visibility
        this.tournamentForm.get('singleDayTournament')?.valueChanges.subscribe((value) => {
          const endDateControl = this.tournamentForm.get('endDate');
          if (value) {
            endDateControl?.setValue(''); // Reset the "endDate" control
          }
          // Enable or disable the "endDate" control based on the checkbox value
          value ? endDateControl?.disable() : endDateControl?.enable();
        });
      }

  tournament = {
    tournamentName: '',
    gameTitle: '',
    date: '',
    location: '',
  };

  onSubmit() {
    // Replace this with your logic to handle form submission

    // Checar si el torneo no es de un solo dia y tiene fecha de fin
    if(this.tournamentForm.value.singleDayTournament == false && this.tournamentForm.value.endDate == ''){
      Swal.fire('Error', 'Seleccione una Fecha de Fin', 'error')
      return;
    }

    // Checar si la fecha de inicio es antes a la fecha de fin
    if(this.tournamentForm.value.singleDayTournament == false && this.tournamentForm.value.endDate != null && this.tournamentForm.value.date != null){
      if(this.tournamentForm.value.date >= this.tournamentForm.value.endDate){
        Swal.fire('Error', 'La Fecha de Fin no puede ser menor o igual a la Fecha de Inicio', 'error')
        return;
      }
    }

    if(this.tournamentForm.value.registrationType == 'manual'){
      const jugadores = this.tournamentForm.value.manualInstructions?.split("\n");
      this.tournamentForm.value.playerList = jugadores;
    }


    console.log('Form submitted with data:', this.tournamentForm.value);
    // You can send this data to an API, update a database, etc.
  }



}
