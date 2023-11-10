import { Component, computed, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { TwitchEmbed, TwitchEmbedLayout, TwitchPlayerEvent } from 'twitch-player';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  private authService = inject( AuthService );
  private router = inject( Router );

  // 'maximilian_dood', btssmash,


  public user = computed( ()=> this.authService.currentUser() );

  public status = computed( ()=> this.authService.authStatus() );


  public player :any
  public embeded :any;
  public embeded2 :any;
  public isStreaming = false;

  constructor() {
    console.log(this.user());
    console.log(this.status());
  }

  async ngOnInit() {
    this.embeded = await new  TwitchEmbed('twitch-player', {
      width: 1280,
      height: 720,
      channel: 'maximilian_dood',
      layout: TwitchEmbedLayout.VIDEO
    });

    this.embeded.addEventListener(TwitchPlayerEvent.VIDEO_PLAY, () => {
      this.isStreaming = true;
    });

  }



  onLogout() {
    this.authService.logout();
  }


  title = 'EsportsUDG';

  games = [
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
    },
    // Add more games as needed
  ];

  tournaments = [
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
    // Add more tournaments as needed
  ];


  carouselOptions: OwlOptions = {
    loop: true,
    nav: true, // Show navigation arrows
    dots: false, // Hide pagination dots
    navText: ['<', '>'], // Custom navigation arrow symbols
    responsive: {
      // Breakpoint from 0 up
      0: {
        items: 1,
      },
      // Breakpoint from 480 up
      480: {
        items: 2,
      },
      // Breakpoint from 768 up
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  };


  goToCreateTournament() {
    this.router.navigateByUrl('dashboard/create-tournament')
  }

  goToProfile() {
    this.router.navigateByUrl('dashboard/profile')
    console.log(this.user());
  }

  gotoRoute(route: string) {
    this.router.navigateByUrl(route);
  }

}
